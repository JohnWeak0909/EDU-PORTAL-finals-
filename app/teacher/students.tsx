import React, { useState, useCallback } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, RefreshControl, FlatList, Alert, Modal } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { useRouter } from "expo-router";
import { useAuth } from "@/hooks/use-auth";
import { trpc } from "@/lib/trpc";

export default function TeacherStudentsScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    studentId: "",
    fullName: "",
    email: "",
    contactNumber: "",
    section: "",
    gradeLevel: "",
  });

  const studentsQuery = trpc.students.all.useQuery();
  const createMutation = trpc.students.create.useMutation();
  const updateMutation = trpc.students.update.useMutation();
  const deleteMutation = trpc.students.delete.useMutation();
  const searchQueryResult = trpc.students.search.useQuery(
    { query: searchQuery },
    { enabled: searchQuery.length > 2 }
  );

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await studentsQuery.refetch();
    setRefreshing(false);
  }, [studentsQuery]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const displayedStudents = searchQuery.length > 2 && searchQueryResult.data 
    ? searchQueryResult.data 
    : studentsQuery.data || [];

  const resetForm = () => {
    setFormData({
      studentId: "",
      fullName: "",
      email: "",
      contactNumber: "",
      section: "",
      gradeLevel: "",
    });
    setSelectedStudent(null);
  };

  const handleAddStudent = async () => {
    if (!formData.studentId || !formData.fullName) {
      Alert.alert("Error", "Student ID and Full Name are required");
      return;
    }

    try {
      await createMutation.mutateAsync(formData);
      Alert.alert("Success", "Student added successfully");
      resetForm();
      setIsAddModalVisible(false);
      await studentsQuery.refetch();
    } catch (error) {
      Alert.alert("Error", "Failed to add student");
    }
  };

  const handleEditStudent = async () => {
    if (!selectedStudent) return;

    try {
      await updateMutation.mutateAsync({
        id: selectedStudent.id,
        ...formData,
      });
      Alert.alert("Success", "Student updated successfully");
      resetForm();
      setIsEditModalVisible(false);
      await studentsQuery.refetch();
    } catch (error) {
      Alert.alert("Error", "Failed to update student");
    }
  };

  const handleDeleteStudent = (student: any) => {
    Alert.alert("Delete Student", `Delete ${student.fullName}?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteMutation.mutateAsync({ id: student.id });
            Alert.alert("Success", "Student deleted successfully");
            await studentsQuery.refetch();
          } catch (error) {
            Alert.alert("Error", "Failed to delete student");
          }
        },
      },
    ]);
  };

  const openEditModal = (student: any) => {
    setSelectedStudent(student);
    setFormData({
      studentId: student.studentId,
      fullName: student.fullName,
      email: student.email || "",
      contactNumber: student.contactNumber || "",
      section: student.section || "",
      gradeLevel: student.gradeLevel || "",
    });
    setIsEditModalVisible(true);
  };

  const renderStudentCard = (student: any) => (
    <View key={student.id} className="bg-surface rounded-lg p-4 mb-3 border border-border">
      <View className="flex-row justify-between items-start gap-3">
        <View className="flex-1">
          <Text className="text-foreground font-semibold text-base">{student.fullName}</Text>
          <Text className="text-muted text-xs mt-1">ID: {student.studentId}</Text>
          {student.email && <Text className="text-muted text-xs">{student.email}</Text>}
          {student.section && (
            <Text className="text-muted text-xs">
              {student.section} • Grade {student.gradeLevel}
            </Text>
          )}
        </View>
        <View className="flex-row gap-2">
          <TouchableOpacity
            className="bg-primary/20 px-3 py-2 rounded"
            onPress={() => openEditModal(student)}
          >
            <Text className="text-primary text-xs font-semibold">Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-red-500/20 px-3 py-2 rounded"
            onPress={() => handleDeleteStudent(student)}
          >
            <Text className="text-red-500 text-xs font-semibold">Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <ScreenContainer className="bg-background">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      >
        {/* Header */}
        <View className="bg-primary px-6 py-6 gap-3">
          <TouchableOpacity onPress={() => router.back()} className="mb-2">
            <Text className="text-background/80 text-sm">← Back</Text>
          </TouchableOpacity>
          <Text className="text-background/90 text-sm">Manage Students</Text>
          <Text className="text-background text-2xl font-bold">Students</Text>
        </View>

        {/* Search and Add */}
        <View className="px-6 py-4 gap-3">
          <View className="bg-surface rounded-lg px-4 py-3 border border-border flex-row items-center gap-2">
            <Text className="text-muted">🔍</Text>
            <TextInput
              className="flex-1 text-foreground"
              placeholder="Search students..."
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>

          <TouchableOpacity
            className="bg-primary rounded-lg px-4 py-3 flex-row items-center justify-center gap-2"
            onPress={() => setIsAddModalVisible(true)}
          >
            <Text className="text-background text-lg">➕</Text>
            <Text className="text-background font-semibold">Add Student</Text>
          </TouchableOpacity>
        </View>

        {/* Students List */}
        <View className="px-6 py-4">
          {displayedStudents.length > 0 ? (
            displayedStudents.map(renderStudentCard)
          ) : (
            <View className="bg-surface rounded-lg p-6 border border-border items-center">
              <Text className="text-muted text-sm">No students found</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Add Student Modal */}
      <Modal visible={isAddModalVisible} transparent animationType="slide">
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-background rounded-t-2xl p-6 gap-4">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-foreground text-xl font-bold">Add Student</Text>
              <TouchableOpacity onPress={() => setIsAddModalVisible(false)}>
                <Text className="text-muted text-2xl">✕</Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <TextInput
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground mb-3"
                placeholder="Student ID"
                placeholderTextColor="#888"
                value={formData.studentId}
                onChangeText={(text) => setFormData({ ...formData, studentId: text })}
              />
              <TextInput
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground mb-3"
                placeholder="Full Name"
                placeholderTextColor="#888"
                value={formData.fullName}
                onChangeText={(text) => setFormData({ ...formData, fullName: text })}
              />
              <TextInput
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground mb-3"
                placeholder="Email"
                placeholderTextColor="#888"
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
              />
              <TextInput
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground mb-3"
                placeholder="Contact Number"
                placeholderTextColor="#888"
                value={formData.contactNumber}
                onChangeText={(text) => setFormData({ ...formData, contactNumber: text })}
              />
              <TextInput
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground mb-3"
                placeholder="Section"
                placeholderTextColor="#888"
                value={formData.section}
                onChangeText={(text) => setFormData({ ...formData, section: text })}
              />
              <TextInput
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground mb-6"
                placeholder="Grade Level"
                placeholderTextColor="#888"
                value={formData.gradeLevel}
                onChangeText={(text) => setFormData({ ...formData, gradeLevel: text })}
              />

              <TouchableOpacity
                className="bg-primary rounded-lg px-4 py-3 items-center"
                onPress={handleAddStudent}
                disabled={createMutation.isPending}
              >
                <Text className="text-background font-bold">
                  {createMutation.isPending ? "Adding..." : "Add Student"}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Edit Student Modal */}
      <Modal visible={isEditModalVisible} transparent animationType="slide">
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-background rounded-t-2xl p-6 gap-4">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-foreground text-xl font-bold">Edit Student</Text>
              <TouchableOpacity onPress={() => setIsEditModalVisible(false)}>
                <Text className="text-muted text-2xl">✕</Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <TextInput
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground mb-3"
                placeholder="Student ID"
                placeholderTextColor="#888"
                value={formData.studentId}
                onChangeText={(text) => setFormData({ ...formData, studentId: text })}
                editable={false}
              />
              <TextInput
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground mb-3"
                placeholder="Full Name"
                placeholderTextColor="#888"
                value={formData.fullName}
                onChangeText={(text) => setFormData({ ...formData, fullName: text })}
              />
              <TextInput
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground mb-3"
                placeholder="Email"
                placeholderTextColor="#888"
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
              />
              <TextInput
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground mb-3"
                placeholder="Contact Number"
                placeholderTextColor="#888"
                value={formData.contactNumber}
                onChangeText={(text) => setFormData({ ...formData, contactNumber: text })}
              />
              <TextInput
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground mb-3"
                placeholder="Section"
                placeholderTextColor="#888"
                value={formData.section}
                onChangeText={(text) => setFormData({ ...formData, section: text })}
              />
              <TextInput
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground mb-6"
                placeholder="Grade Level"
                placeholderTextColor="#888"
                value={formData.gradeLevel}
                onChangeText={(text) => setFormData({ ...formData, gradeLevel: text })}
              />

              <TouchableOpacity
                className="bg-primary rounded-lg px-4 py-3 items-center"
                onPress={handleEditStudent}
                disabled={updateMutation.isPending}
              >
                <Text className="text-background font-bold">
                  {updateMutation.isPending ? "Updating..." : "Update Student"}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
}
