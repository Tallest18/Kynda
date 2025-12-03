import React, { useState } from "react";
import { 
  X, 
  BookOpen, 
  FileText, 
  ClipboardList, 
  Sparkles,
  ChevronRight,
  Loader2
} from "lucide-react";

const KyndaAssistantModal = ({ isOpen, onClose }) => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [formData, setFormData] = useState({
    subject: "",
    topic: "",
    gradeLevel: "",
    duration: "",
    objectives: "",
    numberOfQuestions: "10",
    difficulty: "medium"
  });
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const tools = [
    {
      id: "lesson-plan",
      icon: BookOpen,
      title: "Lesson Plan Generator",
      description: "Create comprehensive lesson plans with objectives and activities",
      color: "blue"
    },
    {
      id: "quiz",
      icon: ClipboardList,
      title: "Quiz Generator",
      description: "Generate quizzes and assessments for any topic",
      color: "orange"
    },
    {
      id: "lesson-summary",
      icon: FileText,
      title: "Lesson Summary",
      description: "Get detailed summaries and notes for lesson topics",
      color: "purple"
    }
  ];

  const handleToolClick = (toolId) => {
    setSelectedTool(toolId);
    setResponse("");
    setFormData({
      subject: "",
      topic: "",
      gradeLevel: "",
      duration: "",
      objectives: "",
      numberOfQuestions: "10",
      difficulty: "medium"
    });
  };

  const handleBack = () => {
    setSelectedTool(null);
    setResponse("");
  };

  // Mock AI response generator
  const generateMockResponse = (toolType) => {
    if (toolType === "lesson-plan") {
      return `LESSON PLAN: ${formData.topic}
Subject: ${formData.subject}
Grade Level: ${formData.gradeLevel}
Duration: ${formData.duration} minutes

LEARNING OBJECTIVES:
${formData.objectives || `1. Students will understand the key concepts of ${formData.topic}
2. Students will be able to apply knowledge through practical examples
3. Students will demonstrate mastery through assessment activities`}

MATERIALS NEEDED:
• Whiteboard and markers
• Student handouts
• Multimedia presentation
• Practice worksheets
• Assessment materials

LESSON STRUCTURE:

1. INTRODUCTION (10 minutes)
   - Warm-up activity to engage students
   - Review previous knowledge
   - Present today's learning objectives
   - Connect topic to real-world applications

2. DIRECT INSTRUCTION (15 minutes)
   - Introduce main concepts of ${formData.topic}
   - Provide clear examples and demonstrations
   - Use visual aids and multimedia resources
   - Check for understanding through questioning

3. GUIDED PRACTICE (10 minutes)
   - Work through examples together as a class
   - Students participate in solving problems
   - Provide immediate feedback and clarification
   - Address common misconceptions

4. INDEPENDENT PRACTICE (10 minutes)
   - Students work individually or in small groups
   - Apply concepts learned to new situations
   - Teacher circulates to provide support
   - Monitor student progress and understanding

5. ASSESSMENT & CLOSURE (5 minutes)
   - Quick formative assessment (exit ticket or quiz)
   - Review key concepts covered
   - Answer remaining questions
   - Preview next lesson
   - Assign homework if applicable

DIFFERENTIATION:
• For advanced learners: Provide extension activities and complex problems
• For struggling learners: Offer additional support materials and scaffolding
• For visual learners: Use diagrams, charts, and graphic organizers
• For kinesthetic learners: Include hands-on activities

ASSESSMENT METHODS:
• Formative: Observation during activities, questioning, exit tickets
• Summative: Quiz, project, or performance task
• Self-assessment: Student reflection on learning

HOMEWORK/EXTENSION:
Students will complete a worksheet applying today's concepts and prepare for the next lesson on related topics.`;
    } else if (toolType === "quiz") {
      const numQuestions = parseInt(formData.numberOfQuestions);
      let quiz = `QUIZ: ${formData.topic}\nSubject: ${formData.subject}\nGrade Level: ${formData.gradeLevel}\nDifficulty: ${formData.difficulty.toUpperCase()}\n\n`;
      
      for (let i = 1; i <= numQuestions; i++) {
        quiz += `Question ${i}: What is an important concept related to ${formData.topic}?
A) Correct understanding of the fundamental principles
B) Incorrect interpretation of the basic concepts
C) Unrelated information about the subject
D) Partially accurate but incomplete explanation

Correct Answer: A
Explanation: Understanding the fundamental principles is essential for mastering ${formData.topic}. This forms the foundation for more advanced concepts.

`;
      }
      
      quiz += `\nANSWER KEY:\n`;
      for (let i = 1; i <= numQuestions; i++) {
        quiz += `${i}. A\n`;
      }
      
      quiz += `\nGRADING RUBRIC:\n`;
      quiz += `${numQuestions} questions × 10 points each = ${numQuestions * 10} points total\n`;
      quiz += `90-100%: Excellent understanding\n`;
      quiz += `80-89%: Good understanding\n`;
      quiz += `70-79%: Satisfactory understanding\n`;
      quiz += `Below 70%: Needs improvement`;
      
      return quiz;
    } else if (toolType === "lesson-summary") {
      return `LESSON SUMMARY: ${formData.topic}
Subject: ${formData.subject}
Grade Level: ${formData.gradeLevel}

OVERVIEW:
${formData.topic} is a fundamental concept in ${formData.subject} that provides students with essential knowledge and skills. This topic builds upon previous learning and prepares students for more advanced concepts in the future.

KEY CONCEPTS:

1. Foundation Principles
   • Understanding the basic elements of ${formData.topic}
   • How these principles apply in different contexts
   • Historical development and modern applications

2. Core Components
   • Main ideas and their relationships
   • Important terminology and definitions
   • Critical thinking and problem-solving approaches

3. Practical Applications
   • Real-world examples and case studies
   • Hands-on activities and demonstrations
   • Connections to other subjects and disciplines

IMPORTANT DEFINITIONS:
• Term 1: Definition related to ${formData.topic}
• Term 2: Another key concept in understanding the subject
• Term 3: Advanced terminology for deeper comprehension

KEY FACTS TO REMEMBER:
✓ ${formData.topic} is essential for understanding ${formData.subject}
✓ The concepts learned today build on previous knowledge
✓ These skills will be applied in future lessons and real-world situations
✓ Multiple approaches can be used to solve problems in this area

COMMON MISCONCEPTIONS:
❌ Misconception 1: Students often confuse similar but distinct concepts
✓ Correction: Clarify the differences and provide clear examples

❌ Misconception 2: Oversimplifying complex relationships
✓ Correction: Emphasize the nuances and multiple factors involved

STUDY TIPS:
1. Review notes regularly and create summary sheets
2. Practice problems and apply concepts to new situations
3. Form study groups to discuss difficult concepts
4. Use visual aids like diagrams and concept maps
5. Connect new learning to prior knowledge
6. Ask questions when concepts are unclear

PRACTICE ACTIVITIES:
• Complete assigned worksheets and practice problems
• Watch supplementary videos on the topic
• Create flashcards for key terms and concepts
• Teach the concept to someone else to reinforce learning

ADDITIONAL RESOURCES:
• Textbook chapters: [Relevant sections]
• Online tutorials and interactive simulations
• Educational videos and documentaries
• Practice worksheets and problem sets
• Office hours for additional support

CONNECTIONS TO FUTURE LEARNING:
This lesson on ${formData.topic} prepares students for upcoming topics including advanced applications, related concepts in other areas of ${formData.subject}, and interdisciplinary connections to other subjects.

ASSESSMENT PREPARATION:
Students should be able to:
• Define key terms and explain their significance
• Apply concepts to solve problems
• Analyze examples and identify patterns
• Synthesize information from multiple sources
• Evaluate different approaches and solutions`;
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    setResponse("");

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      const generatedContent = generateMockResponse(selectedTool);
      setResponse(generatedContent);
    } catch (error) {
      setResponse("Sorry, there was an error generating your content. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        border: "border-blue-500",
        bg: "bg-blue-100",
        text: "text-blue-600",
        hover: "hover:bg-blue-50"
      },
      orange: {
        border: "border-orange-500",
        bg: "bg-orange-100",
        text: "text-orange-600",
        hover: "hover:bg-orange-50"
      },
      purple: {
        border: "border-purple-500",
        bg: "bg-purple-100",
        text: "text-purple-600",
        hover: "hover:bg-purple-50"
      }
    };
    return colorMap[color];
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <img
                  src="../images/Vector (1).png"
                  alt="Kynda Logo"
                  className="w-8 h-8"
                />
            <div>
              <h2 className="text-white text-xl font-bold">Kynda Tutors Assistant Tools</h2>
              <p className="text-blue-100 text-sm">AI-powered teaching assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {!selectedTool ? (
            // Tools Selection
            <div>
              <p className="text-gray-600 mb-6 text-center">
                Choose a tool to get started with AI-powered content generation
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tools.map((tool) => {
                  const colors = getColorClasses(tool.color);
                  return (
                    <button
                      key={tool.id}
                      onClick={() => handleToolClick(tool.id)}
                      className={`p-6 rounded-xl border-2 border-gray-200 hover:${colors.border} hover:shadow-lg transition-all group text-left bg-white ${colors.hover}`}
                    >
                      <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <tool.icon className={colors.text} size={24} />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">{tool.title}</h3>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                      <div className="flex items-center gap-2 mt-4 text-blue-600 font-medium text-sm">
                        <span>Get Started</span>
                        <ChevronRight size={16} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            // Form and Results
            <div className="space-y-6">
              <button
                onClick={handleBack}
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
              >
                <ChevronRight size={16} className="rotate-180" />
                Back to tools
              </button>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">
                  {tools.find(t => t.id === selectedTool)?.title}
                </h3>
                <p className="text-sm text-gray-600">
                  Fill in the details below to generate your content
                </p>
              </div>

              {/* Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="e.g., Mathematics, Science, English"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Topic *
                  </label>
                  <input
                    type="text"
                    value={formData.topic}
                    onChange={(e) => setFormData({...formData, topic: e.target.value})}
                    placeholder="e.g., Pythagorean Theorem, Photosynthesis"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grade Level *
                  </label>
                  <input
                    type="text"
                    value={formData.gradeLevel}
                    onChange={(e) => setFormData({...formData, gradeLevel: e.target.value})}
                    placeholder="e.g., Grade 8, High School"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {selectedTool === "lesson-plan" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Duration (minutes)
                      </label>
                      <input
                        type="text"
                        value={formData.duration}
                        onChange={(e) => setFormData({...formData, duration: e.target.value})}
                        placeholder="e.g., 45, 60"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Learning Objectives
                      </label>
                      <textarea
                        value={formData.objectives}
                        onChange={(e) => setFormData({...formData, objectives: e.target.value})}
                        placeholder="What should students learn? (e.g., Understand and apply the concept...)"
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </>
                )}

                {selectedTool === "quiz" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Questions
                      </label>
                      <select
                        value={formData.numberOfQuestions}
                        onChange={(e) => setFormData({...formData, numberOfQuestions: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="5">5 Questions</option>
                        <option value="10">10 Questions</option>
                        <option value="15">15 Questions</option>
                        <option value="20">20 Questions</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Difficulty Level
                      </label>
                      <select
                        value={formData.difficulty}
                        onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading || !formData.subject || !formData.topic || !formData.gradeLevel}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    Generate Content
                  </>
                )}
              </button>

              {/* Response Display */}
              {response && (
                <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-800">Generated Content</h3>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(response);
                        alert("Copied to clipboard!");
                      }}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Copy to Clipboard
                    </button>
                  </div>
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed">
                      {response}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KyndaAssistantModal;