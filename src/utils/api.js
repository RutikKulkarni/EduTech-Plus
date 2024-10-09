export const fetchCourses = async () => {
  try {
    const response = await fetch("https://api.example.com/api/courses");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};
