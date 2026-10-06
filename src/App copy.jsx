// function App() {
//   return (
//     <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-3xl">
//         {/* Header */}
//         <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
//               Dashboard
//             </h1>
//             <p className="mt-1 text-sm text-slate-500">
//               Welcome back! Overview of your workspace & profile.
//             </p>
//           </div>
//           <span className="inline-flex self-start items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 sm:self-auto">
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
//             Active Workspace
//           </span>
//         </div>

//         {/* Dashboard Panels Grid */}
//         <div className="grid gap-6 md:grid-cols-2">
//           {/* Profile Panel */}
//           <Panel>
//             <div className="flex items-center justify-between">
//               <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
//                 Profile
//               </span>
//               <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
//                 Designer
//               </span>
//             </div>

//             <div className="mt-4 flex items-center gap-4">
//               <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-400 text-xl font-bold text-white shadow-md shadow-indigo-500/20">
//                 A
//               </div>
//               <div>
//                 <p className="text-xs font-semibold text-slate-400">Name</p>
//                 <p className="text-xl font-bold text-slate-900">Alex</p>
//                 <p className="text-sm font-medium text-slate-500">
//                   Role: Designer
//                 </p>
//               </div>
//             </div>
//           </Panel>

//           {/* Notification Panel */}
//           <Panel>
//             <div className="flex items-center justify-between">
//               <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
//                 Notification
//               </span>
//               <span className="inline-flex items-center justify-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-700 ring-1 ring-inset ring-amber-600/20">
//                 3 Unread
//               </span>
//             </div>

//             <div className="mt-4">
//               <h2 className="text-2xl font-bold text-slate-900">
//                 3 new notifications
//               </h2>
//               <p className="mt-1 text-xs text-slate-500">
//                 Updates from your projects and team activities.
//               </p>
//             </div>

//             <div className="mt-5">
//               <button className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
//                 View Notifications
//               </button>
//             </div>
//           </Panel>

//           {/* Quick Actions Panel */}
//           <Panel className="md:col-span-2">
//             <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//               <div>
//                 <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
//                   Controls
//                 </span>
//                 <h2 className="mt-0.5 text-xl font-bold text-slate-900">
//                   Quick Actions
//                 </h2>
//                 <p className="mt-0.5 text-xs text-slate-500">
//                   Quickly create items or manage your records.
//                 </p>
//               </div>

//               <div className="flex flex-wrap items-center gap-3">
//                 <button className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                   <span>+</span>
//                   <span>Create</span>
//                 </button>

//                 <button className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
//                   <span>🗑️</span>
//                   <span>Delete</span>
//                 </button>
//               </div>
//             </div>
//           </Panel>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Panel({ children, className = "" }) {
//   return (
//     <div
//       className={`rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md ${className}`}
//     >
//       {children}
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="min-h-screen bg-slate-100 p-8">
//       <div className="mx-auto max-w-3xl">
//         <h1 className="mb-6 text-3xl font-bold text-slate-900">Dashboard</h1>

//         <div className="grid gap-6 md:grid-cols-2">
//           <DashboardCard>
//             <p className="text-sm text-slate-500">Revenue</p>

//             <p className="mt-2 text-3xl font-bold text-slate-900">$24,500</p>

//             <p className="mt-2 text-sm text-slate-500">Updated today</p>
//           </DashboardCard>

//           <DashboardCard>
//             <p className="text-sm text-slate-500">Active Users</p>

//             <p className="mt-2 text-3xl font-bold text-slate-900">1,248</p>

//             <p className="mt-2 text-sm text-green-600">+12% this week</p>
//           </DashboardCard>

//           <DashboardCard>
//             <h2 className="text-xl font-semibold text-slate-900">
//               Quick Actions
//             </h2>

//             <div className="mt-4 flex gap-3">
//               <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
//                 Add User
//               </button>

//               <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700">
//                 Export
//               </button>
//             </div>
//           </DashboardCard>
//         </div>
//       </div>
//     </div>
//   );
// }

// function DashboardCard({ children }) {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
//       {children}
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// const plans = [
//   {
//     id: "basic",
//     name: "Basic",
//     price: 9,
//     description: "For individuals getting started",
//   },
//   {
//     id: "pro",
//     name: "Pro",
//     price: 29,
//     description: "For growing teams",
//   },
//   {
//     id: "enterprise",
//     name: "Enterprise",
//     price: 79,
//     description: "For large organizations",
//   },
// ];

// export default function App() {
//   const [selectedPlanId, setSelectedPlanId] =
//     useState("basic");

//   const selectedPlan = plans.find(
//     (plan) => plan.id === selectedPlanId
//   );

//   function handlePlanChange(planId) {
//     setSelectedPlanId(planId);
//   }

//   return (
//     <div className="min-h-screen bg-slate-100 px-4 py-10">
//       <div className="mx-auto max-w-4xl">
//         <h1 className="mb-2 text-3xl font-bold text-slate-900">
//           Choose Your Plan
//         </h1>

//         <p className="mb-8 text-slate-600">
//           Select a plan and see the summary update instantly.
//         </p>

//         <div className="grid gap-6 md:grid-cols-2">
//           <PlanSelector
//             plans={plans}
//             selectedPlanId={selectedPlanId}
//             onPlanChange={handlePlanChange}
//           />

//           <PlanSummary
//             plan={selectedPlan}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// function PlanSelector({
//   plans,
//   selectedPlanId,
//   onPlanChange,
// }) {
//   return (
//     <section className="rounded-2xl bg-white p-6 shadow">
//       <h2 className="mb-5 text-xl font-semibold text-slate-900">
//         Select a Plan
//       </h2>

//       <div className="space-y-3">
//         {plans.map((plan) => {
//           const isSelected =
//             selectedPlanId === plan.id;

//           return (
//             <button
//               key={plan.id}
//               type="button"
//               onClick={() =>
//                 onPlanChange(plan.id)
//               }
//               className={`w-full rounded-xl border p-4 text-left transition ${
//                 isSelected
//                   ? "border-indigo-600 bg-indigo-50"
//                   : "border-slate-200 bg-white hover:border-slate-400"
//               }`}
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="font-semibold text-slate-900">
//                     {plan.name}
//                   </h3>

//                   <p className="mt-1 text-sm text-slate-500">
//                     {plan.description}
//                   </p>
//                 </div>

//                 <span className="font-bold text-slate-900">
//                   ${plan.price}/mo
//                 </span>
//               </div>
//             </button>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// function PlanSummary({ plan }) {
//   return (
//     <section className="rounded-2xl bg-slate-900 p-6 text-white shadow">
//       <p className="text-sm text-slate-300">
//         Current Selection
//       </p>

//       <h2 className="mt-2 text-3xl font-bold">
//         {plan.name}
//       </h2>

//       <p className="mt-3 text-slate-300">
//         {plan.description}
//       </p>

//       <div className="mt-8 border-t border-slate-700 pt-5">
//         <p className="text-sm text-slate-400">
//           Monthly Price
//         </p>

//         <p className="mt-1 text-4xl font-bold">
//           ${plan.price}
//         </p>
//       </div>
//     </section>
//   );
// }

// import { useRef, useState } from "react";

// const initialFormData = {
//   fullName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
//   phone: "",
//   age: "",
//   eventDate: "",
//   eventTime: "",
//   website: "",
//   topicSearch: "",
//   tickets: "",
//   country: "",
//   attendance: "",
//   interests: [],
//   bio: "",
//   profilePhoto: null,
//   termsAccepted: false,
//   experienceLevel: 5,
//   badgeColor: "#4f46e5",
// };

// function getTodayDate() {
//   const now = new Date();

//   const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);

//   return localDate.toISOString().slice(0, 10);
// }

// const experienceLevels = {
//   1: "Beginner 🐣",
//   2: "Junior 🌿",
//   3: "Mid-Level 🚀",
//   4: "Senior ⚡",
//   5: "Lead / Architect 👑",
// };

// const badgePresets = [
//   { name: "Indigo", hex: "#4f46e5" },
//   { name: "Emerald", hex: "#059669" },
//   { name: "Violet", hex: "#7c3aed" },
//   { name: "Rose", hex: "#e11d48" },
//   { name: "Amber", hex: "#d97706" },
//   { name: "Cyan", hex: "#0891b2" },
// ];

// const timeSlots = [
//   { value: "09:00", label: "09:00 AM", tag: "Keynote Stage", icon: "🌅" },
//   { value: "10:30", label: "10:30 AM", tag: "Architecture", icon: "⚡" },
//   { value: "12:00", label: "12:00 PM", tag: "Demos & Lunch", icon: "🍱" },
//   { value: "14:00", label: "02:00 PM", tag: "Workshops Lab", icon: "💻" },
//   { value: "15:30", label: "03:30 PM", tag: "AI Agents Panel", icon: "🤖" },
//   { value: "17:00", label: "05:00 PM", tag: "Mixer & VIP", icon: "🍸" },
// ];

// function toDateInputValue(date) {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");

//   return `${year}-${month}-${day}`;
// }

// function getTomorrowDate() {
//   const date = new Date();
//   date.setDate(date.getDate() + 1);
//   return toDateInputValue(date);
// }

// function getNextWeekend() {
//   const date = new Date();
//   const daysUntilSaturday = (6 - date.getDay() + 7) % 7 || 7;
//   date.setDate(date.getDate() + daysUntilSaturday);
//   return toDateInputValue(date);
// }

// function formatSelectedDate(value) {
//   if (!value) return "Choose your event date";

//   return new Intl.DateTimeFormat("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   }).format(new Date(`${value}T12:00:00`));
// }

// function FieldError({ name, errors, touched }) {
//   if (!touched[name] || !errors[name]) {
//     return null;
//   }

//   return (
//     <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-rose-400">
//       <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 ring-1 ring-rose-500/30 text-[10px] font-bold">
//         !
//       </span>
//       <span>{errors[name]}</span>
//     </p>
//   );
// }

// function App() {
//   const [formData, setFormData] = useState(initialFormData);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [submittedFormData, setSubmittedFormData] = useState(null);
//   const [calendarMonth, setCalendarMonth] = useState(() => {
//     const today = new Date();
//     return new Date(today.getFullYear(), today.getMonth(), 1);
//   });

//   const fileInputRef = useRef(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const calendarMonthLabel = new Intl.DateTimeFormat("en-IN", {
//     month: "long",
//     year: "numeric",
//   }).format(calendarMonth);
//   const calendarStartOffset = calendarMonth.getDay();
//   const calendarDays = Array.from(
//     {
//       length:
//         calendarStartOffset +
//         new Date(
//           calendarMonth.getFullYear(),
//           calendarMonth.getMonth() + 1,
//           0,
//         ).getDate(),
//     },
//     (_, index) =>
//       index < calendarStartOffset ? null : index - calendarStartOffset + 1,
//   );
//   const canGoToPreviousMonth =
//     calendarMonth.getFullYear() > new Date().getFullYear() ||
//     (calendarMonth.getFullYear() === new Date().getFullYear() &&
//       calendarMonth.getMonth() > new Date().getMonth());

//   // --------------------------------
//   // FIELD VALIDATION
//   // --------------------------------

//   function validateField(name, data) {
//     const value = data[name];

//     switch (name) {
//       case "fullName":
//         if (!value.trim()) {
//           return "Full name is required";
//         }

//         if (value.trim().length < 2) {
//           return "Full name must be at least 2 characters";
//         }

//         return "";

//       case "email": {
//         if (!value.trim()) {
//           return "Email is required";
//         }

//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (!emailPattern.test(value)) {
//           return "Enter a valid email address";
//         }

//         return "";
//       }

//       case "password": {
//         if (!value) {
//           return "Password is required";
//         }

//         const passwordErrors = [];

//         if (value.length < 8) {
//           passwordErrors.push("8+ characters");
//         }

//         if (!/[A-Z]/.test(value)) {
//           passwordErrors.push("uppercase letter");
//         }

//         if (!/[a-z]/.test(value)) {
//           passwordErrors.push("lowercase letter");
//         }

//         if (!/\d/.test(value)) {
//           passwordErrors.push("number");
//         }

//         if (!/[^\w\s]/.test(value)) {
//           passwordErrors.push("special character");
//         }

//         if (passwordErrors.length > 0) {
//           return `Password needs: ${passwordErrors.join(", ")}`;
//         }

//         return "";
//       }

//       case "confirmPassword":
//         if (!value) {
//           return "Please confirm your password";
//         }

//         if (value !== data.password) {
//           return "Passwords do not match";
//         }

//         return "";

//       case "phone":
//         if (!value.trim()) {
//           return "Phone number is required";
//         }

//         if (!/^\d{10}$/.test(value)) {
//           return "Phone number must be exactly 10 digits";
//         }

//         return "";

//       case "age": {
//         if (!value.trim()) {
//           return "Age is required";
//         }

//         const age = Number(value);

//         if (!Number.isInteger(age)) {
//           return "Age must be a whole number";
//         }

//         if (age < 18 || age > 100) {
//           return "Age must be between 18 and 100";
//         }

//         return "";
//       }

//       case "eventDate":
//         if (!value) {
//           return "Event date is required";
//         }

//         if (value < getTodayDate()) {
//           return "Event date cannot be in the past";
//         }

//         return "";

//       case "eventTime":
//         if (!value) {
//           return "Event time is required";
//         }

//         return "";

//       case "website": {
//         // Optional field
//         if (!value.trim()) {
//           return "";
//         }

//         try {
//           const url = new URL(value);

//           if (!["http:", "https:"].includes(url.protocol)) {
//             return "Website must start with http:// or https://";
//           }
//         } catch {
//           return "Enter a valid website URL";
//         }

//         return "";
//       }

//       case "topicSearch":
//         // Optional search field
//         if (!value.trim()) {
//           return "";
//         }

//         if (value.trim().length < 2) {
//           return "Enter at least 2 characters";
//         }

//         return "";

//       case "tickets": {
//         if (!value.trim()) {
//           return "Number of tickets is required";
//         }

//         const ticketCount = Number(value);

//         if (!Number.isInteger(ticketCount)) {
//           return "Tickets must be a whole number";
//         }

//         if (ticketCount < 1) {
//           return "Minimum 1 ticket";
//         }

//         if (ticketCount > 5) {
//           return "Maximum 5 tickets";
//         }

//         return "";
//       }

//       case "country":
//         if (!value) {
//           return "Please select a country";
//         }

//         return "";

//       case "attendance":
//         if (!value) {
//           return "Please select attendance type";
//         }

//         return "";

//       case "interests":
//         if (value.length === 0) {
//           return "Select at least one interest";
//         }

//         return "";

//       case "bio":
//         if (!value.trim()) {
//           return "Bio is required";
//         }

//         if (value.trim().length < 20) {
//           return "Bio must be at least 20 characters";
//         }

//         if (value.trim().length > 300) {
//           return "Bio must not exceed 300 characters";
//         }

//         return "";

//       case "profilePhoto": {
//         // Optional file
//         if (!value) {
//           return "";
//         }

//         const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

//         if (!allowedTypes.includes(value.type)) {
//           return "Only JPG, PNG and WEBP files are allowed";
//         }

//         if (value.size > 2 * 1024 * 1024) {
//           return "Profile photo must be less than 2MB";
//         }

//         return "";
//       }

//       case "termsAccepted":
//         if (!value) {
//           return "You must accept the terms";
//         }

//         return "";

//       default:
//         return "";
//     }
//   }

//   // --------------------------------
//   // COMPLETE FORM VALIDATION
//   // --------------------------------

//   function validateForm(data) {
//     const fieldsToValidate = [
//       "fullName",
//       "email",
//       "password",
//       "confirmPassword",
//       "phone",
//       "age",
//       "eventDate",
//       "eventTime",
//       "website",
//       "topicSearch",
//       "tickets",
//       "country",
//       "attendance",
//       "interests",
//       "bio",
//       "profilePhoto",
//       "termsAccepted",
//     ];

//     const newErrors = {};

//     fieldsToValidate.forEach((name) => {
//       const error = validateField(name, data);

//       if (error) {
//         newErrors[name] = error;
//       }
//     });

//     return newErrors;
//   }

//   // --------------------------------
//   // LIVE VALIDATION
//   // --------------------------------

//   function updateFormField(name, nextValue) {
//     const nextFormData = {
//       ...formData,
//       [name]: nextValue,
//     };

//     setFormData(nextFormData);
//     setTouched((prev) => ({ ...prev, [name]: true }));
//     setErrors((prev) => ({
//       ...prev,
//       [name]: validateField(name, nextFormData),
//     }));
//   }

//   function handleChange(event) {
//     const { name, value, type, checked, files } = event.target;

//     let nextValue = value;

//     // File input
//     if (type === "file") {
//       nextValue = files?.[0] ?? null;
//     }

//     // Multiple checkbox group
//     if (type === "checkbox" && name === "interests") {
//       nextValue = checked
//         ? [...formData.interests, value]
//         : formData.interests.filter((interest) => interest !== value);
//     }

//     // Single checkbox
//     if (type === "checkbox" && name !== "interests") {
//       nextValue = checked;
//     }

//     // Phone -> only digits
//     if (name === "phone") {
//       nextValue = value.replace(/\D/g, "").slice(0, 10);
//     }

//     // Age -> only digits
//     if (name === "age") {
//       nextValue = value.replace(/\D/g, "").slice(0, 3);
//     }

//     // Tickets -> only digits
//     if (name === "tickets") {
//       nextValue = value.replace(/\D/g, "").slice(0, 1);
//     }

//     // Range -> convert to number
//     if (type === "range") {
//       nextValue = Number(value);
//     }

//     const nextFormData = { ...formData, [name]: nextValue };

//     setFormData(nextFormData);
//     setTouched((prev) => ({ ...prev, [name]: true }));

//     // Validate changed field immediately
//     setErrors((prev) => {
//       const nextErrors = {
//         ...prev,
//         [name]: validateField(name, nextFormData),
//       };

//       // Password change hone par
//       // confirm password bhi revalidate karo
//       if (
//         name === "password" &&
//         (touched.confirmPassword || nextFormData.confirmPassword)
//       ) {
//         nextErrors.confirmPassword = validateField(
//           "confirmPassword",
//           nextFormData,
//         );
//       }

//       return nextErrors;
//     });
//   }

//   // --------------------------------
//   // BLUR VALIDATION
//   // --------------------------------

//   function handleBlur(event) {
//     const { name } = event.target;

//     setTouched((prev) => ({
//       ...prev,
//       [name]: true,
//     }));

//     setErrors((prev) => ({
//       ...prev,
//       [name]: validateField(name, formData),
//     }));
//   }

//   // --------------------------------
//   // SUBMIT
//   // --------------------------------

//   function handleSubmit(event) {
//     event.preventDefault();

//     const newErrors = validateForm(formData);

//     setErrors(newErrors);

//     // Submit par all fields touched
//     const allTouched = {};

//     Object.keys(formData).forEach((name) => {
//       allTouched[name] = true;
//     });

//     setTouched(allTouched);

//     // Invalid
//     if (Object.keys(newErrors).length > 0) {
//       setSubmittedFormData(null);
//       return;
//     }

//     // Do NOT store/display password
//     const safeSubmission = { ...formData };
//     delete safeSubmission.password;
//     delete safeSubmission.confirmPassword;
//     delete safeSubmission.profilePhoto;

//     setSubmittedFormData({
//       ...safeSubmission,
//       profilePhotoName: formData.profilePhoto?.name ?? null,
//       passCode: Math.floor(100000 + Math.random() * 900000),
//     });

//     // Reset form state
//     setFormData(initialFormData);
//     setErrors({});
//     setTouched({});

//     // File input needs manual clearing
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   }

//   return (
//     <div className="conference-ui min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
//       <div className="relative mx-auto max-w-4xl">
//         {/* Header */}
//         <div className="mb-8 text-center">
//           <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300 backdrop-blur-md">
//             <span className="relative flex h-2 w-2">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
//             </span>
//             TechSummit 2026 • Official Pass Portal
//           </div>

//           <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
//             Claim Your Pass & Custom Badge
//           </h1>

//           <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
//             Fill out your credentials below to generate your personalized
//             conference badge & VIP entry pass with live preview.
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           noValidate
//           className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7 md:p-8"
//         >
//           {/* -------------------------------- */}
//           {/* 01: PERSONAL INFORMATION         */}
//           {/* -------------------------------- */}

//           <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700/80">
//             <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-xs font-bold text-indigo-400 ring-1 ring-indigo-500/40">
//                   01
//                 </span>
//                 <div>
//                   <h2 className="text-lg font-bold text-white">
//                     Personal Information
//                   </h2>
//                   <p className="text-xs text-slate-400">
//                     Your official attendee credentials
//                   </p>
//                 </div>
//               </div>
//               <span className="text-xs font-medium text-slate-400">
//                 * Required
//               </span>
//             </div>

//             <div className="grid gap-5 sm:grid-cols-2">
//               {/* Full Name */}
//               <div className="sm:col-span-2">
//                 <div className="mb-1.5 flex items-center justify-between">
//                   <label
//                     htmlFor="fullName"
//                     className="text-xs font-semibold uppercase tracking-wider text-slate-300"
//                   >
//                     Full Name <span className="text-rose-400">*</span>
//                   </label>
//                   <span className="text-[11px] text-slate-500">
//                     As printed on your badge
//                   </span>
//                 </div>

//                 <div className="relative">
//                   <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
//                     <svg
//                       className="h-5 w-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                       />
//                     </svg>
//                   </span>
//                   <input
//                     id="fullName"
//                     name="fullName"
//                     type="text"
//                     placeholder="e.g. Alex Rivera"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`w-full rounded-xl border pl-11 pr-10 py-3 text-sm font-medium transition-all duration-200 outline-none ${
//                       touched.fullName && errors.fullName
//                         ? "border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20"
//                         : touched.fullName &&
//                             !errors.fullName &&
//                             formData.fullName
//                           ? "border-emerald-500/60 bg-emerald-950/10 text-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
//                           : "border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 hover:border-slate-600 focus:border-indigo-500 focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20"
//                     }`}
//                   />
//                   {touched.fullName &&
//                     !errors.fullName &&
//                     formData.fullName && (
//                       <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-sm font-bold text-emerald-400">
//                         ✓
//                       </span>
//                     )}
//                 </div>
//                 <FieldError name="fullName" errors={errors} touched={touched} />
//               </div>

//               {/* Email */}
//               <div className="sm:col-span-2">
//                 <div className="mb-1.5 flex items-center justify-between">
//                   <label
//                     htmlFor="email"
//                     className="text-xs font-semibold uppercase tracking-wider text-slate-300"
//                   >
//                     Email Address <span className="text-rose-400">*</span>
//                   </label>
//                   <span className="text-[11px] text-slate-500">
//                     Ticket & pass will be sent here
//                   </span>
//                 </div>

//                 <div className="relative">
//                   <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
//                     <svg
//                       className="h-5 w-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </span>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="alex.rivera@example.com"
//                     value={formData.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`w-full rounded-xl border pl-11 pr-10 py-3 text-sm font-medium transition-all duration-200 outline-none ${
//                       touched.email && errors.email
//                         ? "border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20"
//                         : touched.email && !errors.email && formData.email
//                           ? "border-emerald-500/60 bg-emerald-950/10 text-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
//                           : "border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 hover:border-slate-600 focus:border-indigo-500 focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20"
//                     }`}
//                   />
//                   {touched.email && !errors.email && formData.email && (
//                     <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-sm font-bold text-emerald-400">
//                       ✓
//                     </span>
//                   )}
//                 </div>
//                 <FieldError name="email" errors={errors} touched={touched} />
//               </div>

//               {/* Password */}
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300"
//                 >
//                   Password <span className="text-rose-400">*</span>
//                 </label>

//                 <div className="relative">
//                   <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
//                     <svg
//                       className="h-5 w-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//                       />
//                     </svg>
//                   </span>
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Min 8 chars, 1 number, 1 special"
//                     value={formData.password}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`w-full rounded-xl border pl-11 pr-11 py-3 text-sm font-medium transition-all duration-200 outline-none ${
//                       touched.password && errors.password
//                         ? "border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20"
//                         : touched.password &&
//                             !errors.password &&
//                             formData.password
//                           ? "border-emerald-500/60 bg-emerald-950/10 text-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
//                           : "border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 hover:border-slate-600 focus:border-indigo-500 focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20"
//                     }`}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword((prev) => !prev)}
//                     className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-200 focus:outline-none"
//                     aria-label={
//                       showPassword ? "Hide password" : "Show password"
//                     }
//                   >
//                     {showPassword ? (
//                       <span className="text-sm">🙈</span>
//                     ) : (
//                       <span className="text-sm">👁️</span>
//                     )}
//                   </button>
//                 </div>
//                 <FieldError name="password" errors={errors} touched={touched} />
//               </div>

//               {/* Confirm Password */}
//               <div>
//                 <label
//                   htmlFor="confirmPassword"
//                   className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300"
//                 >
//                   Confirm Password <span className="text-rose-400">*</span>
//                 </label>

//                 <div className="relative">
//                   <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
//                     <svg
//                       className="h-5 w-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                       />
//                     </svg>
//                   </span>
//                   <input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Re-enter password"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`w-full rounded-xl border pl-11 pr-11 py-3 text-sm font-medium transition-all duration-200 outline-none ${
//                       touched.confirmPassword && errors.confirmPassword
//                         ? "border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20"
//                         : touched.confirmPassword &&
//                             !errors.confirmPassword &&
//                             formData.confirmPassword
//                           ? "border-emerald-500/60 bg-emerald-950/10 text-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
//                           : "border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 hover:border-slate-600 focus:border-indigo-500 focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20"
//                     }`}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword((prev) => !prev)}
//                     className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-200 focus:outline-none"
//                     aria-label={
//                       showConfirmPassword
//                         ? "Hide confirm password"
//                         : "Show confirm password"
//                     }
//                   >
//                     {showConfirmPassword ? (
//                       <span className="text-sm">🙈</span>
//                     ) : (
//                       <span className="text-sm">👁️</span>
//                     )}
//                   </button>
//                 </div>
//                 <FieldError
//                   name="confirmPassword"
//                   errors={errors}
//                   touched={touched}
//                 />
//               </div>

//               {/* Phone */}
//               <div>
//                 <div className="mb-1.5 flex items-center justify-between">
//                   <label
//                     htmlFor="phone"
//                     className="text-xs font-semibold uppercase tracking-wider text-slate-300"
//                   >
//                     Phone Number <span className="text-rose-400">*</span>
//                   </label>
//                   <span className="text-[11px] text-slate-500">10 digits</span>
//                 </div>

//                 <div className="relative">
//                   <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
//                     <svg
//                       className="h-5 w-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       />
//                     </svg>
//                   </span>
//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     inputMode="numeric"
//                     maxLength={10}
//                     placeholder="9876543210"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`w-full rounded-xl border pl-11 pr-10 py-3 text-sm font-medium transition-all duration-200 outline-none ${
//                       touched.phone && errors.phone
//                         ? "border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20"
//                         : touched.phone && !errors.phone && formData.phone
//                           ? "border-emerald-500/60 bg-emerald-950/10 text-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
//                           : "border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 hover:border-slate-600 focus:border-indigo-500 focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20"
//                     }`}
//                   />
//                   {touched.phone && !errors.phone && formData.phone && (
//                     <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-sm font-bold text-emerald-400">
//                       ✓
//                     </span>
//                   )}
//                 </div>
//                 <FieldError name="phone" errors={errors} touched={touched} />
//               </div>

//               {/* Age */}
//               <div>
//                 <div className="mb-1.5 flex items-center justify-between">
//                   <label
//                     htmlFor="age"
//                     className="text-xs font-semibold uppercase tracking-wider text-slate-300"
//                   >
//                     Age <span className="text-rose-400">*</span>
//                   </label>
//                   <span className="text-[11px] text-slate-500">
//                     Min 18 years
//                   </span>
//                 </div>

//                 <div className="relative">
//                   <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
//                     <svg
//                       className="h-5 w-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                   </span>
//                   <input
//                     id="age"
//                     name="age"
//                     type="number"
//                     min="18"
//                     max="100"
//                     inputMode="numeric"
//                     placeholder="25"
//                     value={formData.age}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`w-full rounded-xl border pl-11 pr-10 py-3 text-sm font-medium transition-all duration-200 outline-none ${
//                       touched.age && errors.age
//                         ? "border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20"
//                         : touched.age && !errors.age && formData.age
//                           ? "border-emerald-500/60 bg-emerald-950/10 text-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
//                           : "border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 hover:border-slate-600 focus:border-indigo-500 focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20"
//                     }`}
//                   />
//                   {touched.age && !errors.age && formData.age && (
//                     <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-sm font-bold text-emerald-400">
//                       ✓
//                     </span>
//                   )}
//                 </div>
//                 <FieldError name="age" errors={errors} touched={touched} />
//               </div>
//             </div>
//           </section>

//           {/* -------------------------------- */}
//           {/* 02: EVENT & PASSES               */}
//           {/* -------------------------------- */}

//           <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700/80">
//             <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-xs font-bold text-emerald-400 ring-1 ring-emerald-500/40">
//                   02
//                 </span>
//                 <div>
//                   <h2 className="text-lg font-bold text-white">
//                     Event & Passes
//                   </h2>
//                   <p className="text-xs text-slate-400">
//                     Schedule, tickets & attendance format
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="grid gap-5 sm:grid-cols-2">
//               {/* Event Date - Interactive Calendar Board */}
//               <div
//                 className={`flex flex-col justify-between rounded-2xl border p-4.5 sm:p-5 transition-all duration-300 ${
//                   touched.eventDate && errors.eventDate
//                     ? "border-rose-500/80 bg-rose-950/20 ring-2 ring-rose-500/20"
//                     : "border-slate-800 bg-slate-950/60 shadow-xl shadow-black/20 hover:border-slate-700/80"
//                 }`}
//               >
//                 <div>
//                   {/* Calendar Header */}
//                   <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
//                     <div className="flex items-center gap-2.5">
//                       <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-500/30">
//                         <svg
//                           className="h-4 w-4"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                           />
//                         </svg>
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="eventDate"
//                           className="block text-xs font-bold uppercase tracking-wider text-white"
//                         >
//                           Event Date <span className="text-rose-400">*</span>
//                         </label>
//                         <span className="text-[11px] text-slate-400">
//                           Select conference attendance day
//                         </span>
//                       </div>
//                     </div>
//                     <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 ring-1 ring-emerald-500/30">
//                       <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
//                       Live Slots
//                     </span>
//                   </div>

//                   {/* Quick Presets */}
//                   <div className="mt-3 flex flex-wrap items-center gap-1.5">
//                     <span className="mr-1 text-[11px] font-semibold text-slate-400">
//                       Quick:
//                     </span>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const today = new Date();
//                         const val = toDateInputValue(today);
//                         updateFormField("eventDate", val);
//                         setCalendarMonth(
//                           new Date(today.getFullYear(), today.getMonth(), 1),
//                         );
//                       }}
//                       className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition ${
//                         formData.eventDate === getTodayDate()
//                           ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/30"
//                           : "bg-slate-900 text-slate-300 ring-1 ring-slate-800 hover:bg-slate-800 hover:text-white"
//                       }`}
//                     >
//                       ⚡ Today
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const tomorrowStr = getTomorrowDate();
//                         updateFormField("eventDate", tomorrowStr);
//                         const parts = tomorrowStr.split("-");
//                         setCalendarMonth(
//                           new Date(Number(parts[0]), Number(parts[1]) - 1, 1),
//                         );
//                       }}
//                       className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition ${
//                         formData.eventDate === getTomorrowDate()
//                           ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/30"
//                           : "bg-slate-900 text-slate-300 ring-1 ring-slate-800 hover:bg-slate-800 hover:text-white"
//                       }`}
//                     >
//                       🌿 Tomorrow
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         const nextSat = getNextWeekend();
//                         updateFormField("eventDate", nextSat);
//                         const parts = nextSat.split("-");
//                         setCalendarMonth(
//                           new Date(Number(parts[0]), Number(parts[1]) - 1, 1),
//                         );
//                       }}
//                       className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition ${
//                         formData.eventDate === getNextWeekend()
//                           ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/30"
//                           : "bg-slate-900 text-slate-300 ring-1 ring-slate-800 hover:bg-slate-800 hover:text-white"
//                       }`}
//                     >
//                       🎟️ Next Sat
//                     </button>
//                   </div>

//                   {/* Month Navigation */}
//                   <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2">
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setCalendarMonth(
//                           (month) =>
//                             new Date(
//                               month.getFullYear(),
//                               month.getMonth() - 1,
//                               1,
//                             ),
//                         )
//                       }
//                       disabled={!canGoToPreviousMonth}
//                       className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-20"
//                       aria-label="Previous month"
//                     >
//                       ‹
//                     </button>
//                     <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
//                       {calendarMonthLabel}
//                     </span>
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setCalendarMonth(
//                           (month) =>
//                             new Date(
//                               month.getFullYear(),
//                               month.getMonth() + 1,
//                               1,
//                             ),
//                         )
//                       }
//                       className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-white"
//                       aria-label="Next month"
//                     >
//                       ›
//                     </button>
//                   </div>

//                   {/* Weekday Labels */}
//                   <div className="mt-2.5 grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase tracking-wide text-slate-400">
//                     {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
//                       <span key={day} className="py-0.5">
//                         {day}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Day Cells Grid */}
//                   <div className="mt-1.5 grid grid-cols-7 gap-1">
//                     {calendarDays.map((day, index) => {
//                       if (!day)
//                         return (
//                           <span
//                             key={`blank-${index}`}
//                             className="aspect-square"
//                           />
//                         );
//                       const date = new Date(
//                         calendarMonth.getFullYear(),
//                         calendarMonth.getMonth(),
//                         day,
//                       );
//                       const dateValue = toDateInputValue(date);
//                       const isPast = dateValue < getTodayDate();
//                       const isSelected = formData.eventDate === dateValue;
//                       const isToday = dateValue === getTodayDate();

//                       return (
//                         <button
//                           key={dateValue}
//                           type="button"
//                           disabled={isPast}
//                           onClick={() =>
//                             updateFormField("eventDate", dateValue)
//                           }
//                           className={`group relative flex aspect-square flex-col items-center justify-center rounded-xl text-xs font-bold transition-all duration-150 ${
//                             isSelected
//                               ? "scale-[1.04] bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/40 ring-2 ring-indigo-400"
//                               : isToday
//                                 ? "bg-indigo-500/15 text-indigo-300 ring-1 ring-inset ring-indigo-400/50 hover:bg-indigo-500/25"
//                                 : "text-slate-300 hover:bg-slate-800 hover:text-white"
//                           } disabled:cursor-not-allowed disabled:text-slate-700 disabled:hover:bg-transparent`}
//                         >
//                           <span>{day}</span>
//                           {!isPast && !isSelected && (
//                             <span className="absolute bottom-1 h-1 w-1 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400" />
//                           )}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* Selected Date Confirmation Strip */}
//                 <div className="mt-4">
//                   <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/90 px-3 py-2 text-xs">
//                     <div className="flex items-center gap-2 truncate">
//                       <span className="font-medium text-slate-400">
//                         Selected:
//                       </span>
//                       <span
//                         className={`truncate font-semibold ${
//                           formData.eventDate
//                             ? "text-indigo-300"
//                             : "italic text-slate-500"
//                         }`}
//                       >
//                         {formatSelectedDate(formData.eventDate)}
//                       </span>
//                     </div>
//                     {formData.eventDate && (
//                       <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-400">
//                         ✓
//                       </span>
//                     )}
//                   </div>
//                   <input
//                     type="date"
//                     id="eventDate"
//                     name="eventDate"
//                     value={formData.eventDate}
//                     onChange={(e) =>
//                       updateFormField("eventDate", e.target.value)
//                     }
//                     min={getTodayDate()}
//                     className="sr-only"
//                     tabIndex={-1}
//                   />
//                   <FieldError
//                     name="eventDate"
//                     errors={errors}
//                     touched={touched}
//                   />
//                 </div>
//               </div>

//               {/* Preferred Time Slot - Matching Slot Board */}
//               <div
//                 className={`flex h-full flex-col rounded-2xl border p-4.5 sm:p-5 transition-all duration-300 ${
//                   touched.eventTime && errors.eventTime
//                     ? "border-rose-500/80 bg-rose-950/20 ring-2 ring-rose-500/20"
//                     : "border-slate-800 bg-slate-950/60 shadow-xl shadow-black/20 hover:border-slate-700/80"
//                 }`}
//               >
//                 <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
//                   <div className="flex items-center gap-2.5">
//                     <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400 ring-1 ring-violet-500/30">
//                       ◷
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="eventTime"
//                         className="block text-xs font-bold uppercase tracking-wider text-white"
//                       >
//                         Preferred Time Slot{" "}
//                         <span className="text-rose-400">*</span>
//                       </label>
//                       <span className="text-[11px] text-slate-400">
//                         Reserve your 90-minute arrival window
//                       </span>
//                     </div>
//                   </div>
//                   <span className="rounded-full bg-violet-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-300 ring-1 ring-violet-500/30">
//                     6 slots
//                   </span>
//                 </div>

//                 <div className="mt-4 grid grid-cols-2 gap-2">
//                   {timeSlots.map((slot) => {
//                     const isSelected = formData.eventTime === slot.value;
//                     return (
//                       <button
//                         key={slot.value}
//                         id={
//                           slot.value === timeSlots[0].value
//                             ? "eventTime"
//                             : undefined
//                         }
//                         type="button"
//                         onClick={() => updateFormField("eventTime", slot.value)}
//                         className={`group rounded-xl border p-3 text-left transition-all duration-150 ${
//                           isSelected
//                             ? "border-violet-400 bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-500/25 ring-1 ring-violet-300"
//                             : "border-slate-800 bg-slate-900/70 text-slate-200 hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-slate-800"
//                         }`}
//                         aria-pressed={isSelected}
//                       >
//                         <div className="flex items-center justify-between">
//                           <span className="text-base">{slot.icon}</span>
//                           {isSelected && (
//                             <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20 text-[10px]">
//                               ✓
//                             </span>
//                           )}
//                         </div>
//                         <div className="mt-2 text-sm font-extrabold">
//                           {slot.label}
//                         </div>
//                         <div
//                           className={`mt-0.5 text-[10px] font-medium ${isSelected ? "text-violet-100" : "text-slate-500 group-hover:text-slate-400"}`}
//                         >
//                           {slot.tag}
//                         </div>
//                       </button>
//                     );
//                   })}
//                 </div>

//                 <div className="mt-auto pt-4">
//                   <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/90 px-3 py-2 text-xs">
//                     <span className="font-medium text-slate-400">
//                       Selected:
//                     </span>
//                     <span
//                       className={`font-semibold ${formData.eventTime ? "text-violet-300" : "italic text-slate-500"}`}
//                     >
//                       {formData.eventTime
//                         ? timeSlots.find(
//                             (slot) => slot.value === formData.eventTime,
//                           )?.label
//                         : "No time selected"}
//                     </span>
//                   </div>
//                   <FieldError
//                     name="eventTime"
//                     errors={errors}
//                     touched={touched}
//                   />
//                 </div>
//               </div>

//               {/* Number of Tickets + Quick Selector Chips */}
//               <div>
//                 <div className="mb-1.5 flex items-center justify-between">
//                   <label
//                     htmlFor="tickets"
//                     className="text-xs font-semibold uppercase tracking-wider text-slate-300"
//                   >
//                     Tickets <span className="text-rose-400">*</span>
//                   </label>
//                   <span className="text-[11px] text-slate-500">
//                     Max 5 per person
//                   </span>
//                 </div>

//                 <div className="space-y-2">
//                   <div className="relative">
//                     <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
//                       🎟️
//                     </span>
//                     <input
//                       id="tickets"
//                       name="tickets"
//                       type="number"
//                       min="1"
//                       max="5"
//                       inputMode="numeric"
//                       placeholder="1 to 5"
//                       value={formData.tickets}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={`w-full rounded-xl border pl-11 pr-4 py-3 text-sm font-medium transition-all duration-200 outline-none ${
//                         touched.tickets && errors.tickets
//                           ? "border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20"
//                           : "border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 hover:border-slate-600 focus:border-indigo-500 focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20"
//                       }`}
//                     />
//                   </div>

//                   {/* Quick Select Buttons */}
//                   <div className="flex items-center gap-2">
//                     <span className="text-xs text-slate-400">
//                       Quick select:
//                     </span>
//                     {[1, 2, 3, 4, 5].map((num) => (
//                       <button
//                         key={num}
//                         type="button"
//                         onClick={() => {
//                           const eventObj = {
//                             target: {
//                               name: "tickets",
//                               value: String(num),
//                               type: "number",
//                             },
//                           };
//                           handleChange(eventObj);
//                           handleBlur(eventObj);
//                         }}
//                         className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold transition-all duration-150 ${
//                           String(formData.tickets) === String(num)
//                             ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105"
//                             : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
//                         }`}
//                       >
//                         {num}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//                 <FieldError name="tickets" errors={errors} touched={touched} />
//               </div>

//               {/* Country */}
//               <div>
//                 <label
//                   htmlFor="country"
//                   className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300"
//                 >
//                   Country <span className="text-rose-400">*</span>
//                 </label>

//                 <div className="relative">
//                   <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
//                     🌍
//                   </span>
//                   <select
//                     id="country"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`w-full appearance-none rounded-xl border pl-11 pr-10 py-3 text-sm font-medium transition-all duration-200 outline-none ${
//                       touched.country && errors.country
//                         ? "border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20"
//                         : "border-slate-700 bg-slate-800/80 text-white hover:border-slate-600 focus:border-indigo-500 focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20"
//                     }`}
//                   >
//                     <option value="" className="bg-slate-900 text-slate-400">
//                       Select country
//                     </option>
//                     <option value="india" className="bg-slate-900 text-white">
//                       🇮🇳 India
//                     </option>
//                     <option value="usa" className="bg-slate-900 text-white">
//                       🇺🇸 United States
//                     </option>
//                     <option value="uk" className="bg-slate-900 text-white">
//                       🇬🇧 United Kingdom
//                     </option>
//                     <option value="canada" className="bg-slate-900 text-white">
//                       🇨🇦 Canada
//                     </option>
//                     <option
//                       value="australia"
//                       className="bg-slate-900 text-white"
//                     >
//                       🇦🇺 Australia
//                     </option>
//                   </select>
//                   <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400">
//                     <svg
//                       className="h-4 w-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </span>
//                 </div>
//                 <FieldError name="country" errors={errors} touched={touched} />
//               </div>
//             </div>

//             {/* Attendance Type - Modern Card Selectors */}
//             <fieldset className="mt-8">
//               <div className="mb-3 flex items-center justify-between">
//                 <legend className="text-xs font-semibold uppercase tracking-wider text-slate-300">
//                   Attendance Mode <span className="text-rose-400">*</span>
//                 </legend>
//                 <span className="text-[11px] text-slate-500">
//                   Pick your experience
//                 </span>
//               </div>

//               <div className="grid gap-3 sm:grid-cols-3">
//                 {/* In Person */}
//                 <label
//                   className={`group relative flex cursor-pointer flex-col justify-between rounded-xl border p-4 transition-all duration-200 ${
//                     formData.attendance === "in-person"
//                       ? "border-indigo-500 bg-indigo-950/40 shadow-lg shadow-indigo-500/10 ring-2 ring-indigo-500/40"
//                       : "border-slate-800 bg-slate-800/40 hover:border-slate-700 hover:bg-slate-800/70"
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="attendance"
//                     value="in-person"
//                     checked={formData.attendance === "in-person"}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className="sr-only"
//                   />
//                   <div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-2xl">🏢</span>
//                       <span
//                         className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-bold ${
//                           formData.attendance === "in-person"
//                             ? "border-indigo-500 bg-indigo-600 text-white"
//                             : "border-slate-600 bg-slate-800 text-transparent"
//                         }`}
//                       >
//                         ✓
//                       </span>
//                     </div>
//                     <h3 className="mt-3 text-sm font-bold text-white">
//                       In Person
//                     </h3>
//                     <p className="mt-1 text-xs text-slate-400">
//                       Full venue access, swag kit & VIP lounge.
//                     </p>
//                   </div>
//                   <div className="mt-3">
//                     <span className="inline-block rounded-md bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-400">
//                       San Francisco
//                     </span>
//                   </div>
//                 </label>

//                 {/* Online */}
//                 <label
//                   className={`group relative flex cursor-pointer flex-col justify-between rounded-xl border p-4 transition-all duration-200 ${
//                     formData.attendance === "online"
//                       ? "border-indigo-500 bg-indigo-950/40 shadow-lg shadow-indigo-500/10 ring-2 ring-indigo-500/40"
//                       : "border-slate-800 bg-slate-800/40 hover:border-slate-700 hover:bg-slate-800/70"
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="attendance"
//                     value="online"
//                     checked={formData.attendance === "online"}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className="sr-only"
//                   />
//                   <div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-2xl">💻</span>
//                       <span
//                         className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-bold ${
//                           formData.attendance === "online"
//                             ? "border-indigo-500 bg-indigo-600 text-white"
//                             : "border-slate-600 bg-slate-800 text-transparent"
//                         }`}
//                       >
//                         ✓
//                       </span>
//                     </div>
//                     <h3 className="mt-3 text-sm font-bold text-white">
//                       Online Pass
//                     </h3>
//                     <p className="mt-1 text-xs text-slate-400">
//                       4K live stream, live Q&A & digital networking.
//                     </p>
//                   </div>
//                   <div className="mt-3">
//                     <span className="inline-block rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
//                       Worldwide
//                     </span>
//                   </div>
//                 </label>

//                 {/* Hybrid */}
//                 <label
//                   className={`group relative flex cursor-pointer flex-col justify-between rounded-xl border p-4 transition-all duration-200 ${
//                     formData.attendance === "hybrid"
//                       ? "border-indigo-500 bg-indigo-950/40 shadow-lg shadow-indigo-500/10 ring-2 ring-indigo-500/40"
//                       : "border-slate-800 bg-slate-800/40 hover:border-slate-700 hover:bg-slate-800/70"
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="attendance"
//                     value="hybrid"
//                     checked={formData.attendance === "hybrid"}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className="sr-only"
//                   />
//                   <div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-2xl">🌐</span>
//                       <span
//                         className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-bold ${
//                           formData.attendance === "hybrid"
//                             ? "border-indigo-500 bg-indigo-600 text-white"
//                             : "border-slate-600 bg-slate-800 text-transparent"
//                         }`}
//                       >
//                         ✓
//                       </span>
//                     </div>
//                     <h3 className="mt-3 text-sm font-bold text-white">
//                       Hybrid Flex
//                     </h3>
//                     <p className="mt-1 text-xs text-slate-400">
//                       1-day in-person workshop + unlimited virtual pass.
//                     </p>
//                   </div>
//                   <div className="mt-3">
//                     <span className="inline-block rounded-md bg-purple-500/10 px-2 py-0.5 text-[10px] font-semibold text-purple-400">
//                       Best Value
//                     </span>
//                   </div>
//                 </label>
//               </div>
//               <FieldError name="attendance" errors={errors} touched={touched} />
//             </fieldset>
//           </section>

//           {/* -------------------------------- */}
//           {/* 03: PREFERENCES & BADGE STUDIO   */}
//           {/* -------------------------------- */}

//           <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700/80">
//             <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-xs font-bold text-purple-400 ring-1 ring-purple-500/40">
//                   03
//                 </span>
//                 <div>
//                   <h2 className="text-lg font-bold text-white">
//                     Preferences & Badge Studio
//                   </h2>
//                   <p className="text-xs text-slate-400">
//                     Interests, experience & live conference lanyard preview
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Interests - Interactive Checkbox Cards */}
//             <fieldset>
//               <div className="mb-3 flex items-center justify-between">
//                 <legend className="text-xs font-semibold uppercase tracking-wider text-slate-300">
//                   Track Interests <span className="text-rose-400">*</span>
//                 </legend>
//                 <span className="text-[11px] text-slate-500">
//                   Pick at least 1 track
//                 </span>
//               </div>

//               <div className="grid gap-3 sm:grid-cols-2">
//                 {[
//                   {
//                     id: "frontend",
//                     icon: "🎨",
//                     title: "Frontend Engineering",
//                     desc: "React 19, Next.js, Modern CSS & Performance",
//                   },
//                   {
//                     id: "backend",
//                     icon: "⚙️",
//                     title: "Backend & Systems",
//                     desc: "Node.js, Go, Microservices & Cloud Architecture",
//                   },
//                   {
//                     id: "design",
//                     icon: "✨",
//                     title: "UI/UX & Design Systems",
//                     desc: "Figma Tokens, Micro-interactions & Accessibility",
//                   },
//                   {
//                     id: "ai",
//                     icon: "🤖",
//                     title: "AI & Autonomous Agents",
//                     desc: "LLMs, Tool Calling, Vector DBs & Agentic Workflows",
//                   },
//                 ].map((item) => {
//                   const isChecked = formData.interests.includes(item.id);
//                   return (
//                     <label
//                       key={item.id}
//                       className={`flex cursor-pointer items-start gap-3.5 rounded-xl border p-4 transition-all duration-200 ${
//                         isChecked
//                           ? "border-indigo-500 bg-indigo-950/40 shadow-md ring-1 ring-indigo-500/40"
//                           : "border-slate-800 bg-slate-800/40 hover:border-slate-700 hover:bg-slate-800/70"
//                       }`}
//                     >
//                       <input
//                         type="checkbox"
//                         name="interests"
//                         value={item.id}
//                         checked={isChecked}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className="sr-only"
//                       />
//                       <div
//                         className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[11px] font-bold transition-all ${
//                           isChecked
//                             ? "border-indigo-500 bg-indigo-600 text-white"
//                             : "border-slate-600 bg-slate-800 text-transparent"
//                         }`}
//                       >
//                         ✓
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-1.5">
//                           <span>{item.icon}</span>
//                           <span className="text-sm font-semibold text-white">
//                             {item.title}
//                           </span>
//                         </div>
//                         <p className="mt-1 text-xs text-slate-400">
//                           {item.desc}
//                         </p>
//                       </div>
//                     </label>
//                   );
//                 })}
//               </div>
//               <FieldError name="interests" errors={errors} touched={touched} />
//             </fieldset>

//             {/* Experience Slider & Badge Customizer */}
//             <div className="mt-8 grid gap-6 lg:grid-cols-2">
//               <div className="space-y-6">
//                 {/* Experience Range */}
//                 <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-4">
//                   <div className="mb-2 flex items-center justify-between">
//                     <label
//                       htmlFor="experienceLevel"
//                       className="text-xs font-semibold uppercase tracking-wider text-slate-300"
//                     >
//                       Experience Rank
//                     </label>
//                     <span className="rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-xs font-bold text-indigo-300 ring-1 ring-indigo-500/30">
//                       {experienceLevels[formData.experienceLevel] ||
//                         "Level " + formData.experienceLevel}
//                     </span>
//                   </div>

//                   <input
//                     id="experienceLevel"
//                     name="experienceLevel"
//                     type="range"
//                     min="1"
//                     max="5"
//                     value={formData.experienceLevel}
//                     onChange={handleChange}
//                     className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-indigo-500"
//                   />

//                   <div className="mt-2 flex justify-between text-[10px] font-medium text-slate-400">
//                     <span>🐣 Beginner</span>
//                     <span>🌿 Junior</span>
//                     <span>🚀 Mid</span>
//                     <span>⚡ Senior</span>
//                     <span>👑 Lead</span>
//                   </div>
//                 </div>

//                 {/* Badge Color Preset & Picker */}
//                 <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-4">
//                   <div className="mb-3 flex items-center justify-between">
//                     <label
//                       htmlFor="badgeColor"
//                       className="text-xs font-semibold uppercase tracking-wider text-slate-300"
//                     >
//                       Badge Accent Theme
//                     </label>
//                     <span className="text-xs font-mono text-slate-400">
//                       {formData.badgeColor}
//                     </span>
//                   </div>

//                   <div className="flex flex-wrap items-center gap-2.5">
//                     {badgePresets.map((preset) => (
//                       <button
//                         key={preset.hex}
//                         type="button"
//                         onClick={() => {
//                           const eventObj = {
//                             target: {
//                               name: "badgeColor",
//                               value: preset.hex,
//                               type: "color",
//                             },
//                           };
//                           handleChange(eventObj);
//                         }}
//                         className={`group relative flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:scale-110 ${
//                           formData.badgeColor.toLowerCase() ===
//                           preset.hex.toLowerCase()
//                             ? "ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-105"
//                             : "opacity-80 hover:opacity-100"
//                         }`}
//                         style={{ backgroundColor: preset.hex }}
//                         title={preset.name}
//                       >
//                         {formData.badgeColor.toLowerCase() ===
//                           preset.hex.toLowerCase() && (
//                           <span className="text-xs font-bold text-white drop-shadow">
//                             ✓
//                           </span>
//                         )}
//                       </button>
//                     ))}

//                     {/* Custom Color Input */}
//                     <div className="relative ml-2 flex items-center">
//                       <input
//                         id="badgeColor"
//                         name="badgeColor"
//                         type="color"
//                         value={formData.badgeColor}
//                         onChange={handleChange}
//                         className="h-9 w-9 cursor-pointer rounded-full border-0 bg-transparent p-0"
//                         title="Pick custom color"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* LIVE CONFERENCE BADGE PREVIEW */}
//               <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-center">
//                 <div className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
//                   Live Pass Preview
//                 </div>

//                 {/* Badge Card Wrapper */}
//                 <div className="relative w-64 overflow-hidden rounded-2xl border border-white/20 bg-slate-900 shadow-2xl transition-all duration-300">
//                   {/* Lanyard Clip Hole */}
//                   <div className="mx-auto mt-2 h-2.5 w-12 rounded-full bg-slate-800 ring-1 ring-slate-700" />

//                   {/* Dynamic Color Banner */}
//                   <div
//                     className="mt-2 py-2 px-4 transition-colors duration-300"
//                     style={{ backgroundColor: formData.badgeColor }}
//                   >
//                     <div className="text-[10px] font-black tracking-widest text-white uppercase drop-shadow-sm">
//                       TECHCON 2026 • PASS
//                     </div>
//                   </div>

//                   {/* Badge Content */}
//                   <div className="p-4">
//                     {/* Avatar Initials Circle */}
//                     <div
//                       className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/40 text-lg font-black text-white shadow-inner transition-colors duration-300"
//                       style={{ backgroundColor: formData.badgeColor }}
//                     >
//                       {formData.fullName.trim()
//                         ? formData.fullName
//                             .trim()
//                             .split(" ")
//                             .map((w) => w[0])
//                             .join("")
//                             .toUpperCase()
//                             .slice(0, 2)
//                         : "TC"}
//                     </div>

//                     <h4 className="mt-2.5 truncate text-base font-extrabold text-white">
//                       {formData.fullName.trim() || "Your Name Here"}
//                     </h4>

//                     <div className="mt-1 flex items-center justify-center gap-1.5">
//                       <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
//                         {formData.attendance || "Attendee"}
//                       </span>
//                       {formData.country && (
//                         <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-indigo-300 uppercase">
//                           {formData.country}
//                         </span>
//                       )}
//                     </div>

//                     <p className="mt-2 text-[11px] font-semibold text-slate-400">
//                       {experienceLevels[formData.experienceLevel]}
//                     </p>

//                     {/* Simulated Barcode */}
//                     <div className="mt-3 border-t border-dashed border-slate-800 pt-2">
//                       <div className="flex h-5 items-center justify-center gap-0.5 opacity-60">
//                         {[4, 2, 6, 3, 1, 5, 2, 4, 6, 2, 5, 3, 1, 4].map(
//                           (h, i) => (
//                             <div
//                               key={i}
//                               className="bg-white"
//                               style={{
//                                 width: `${(i % 3) + 1}px`,
//                                 height: `${h * 3}px`,
//                               }}
//                             />
//                           ),
//                         )}
//                       </div>
//                       <span className="font-mono text-[9px] text-slate-400 tracking-widest">
//                         PASS-{formData.tickets || "1"}X-
//                         {formData.experienceLevel}026
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* -------------------------------- */}
//           {/* 04: ADDITIONAL INFORMATION       */}
//           {/* -------------------------------- */}

//           <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700/80">
//             <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-xs font-bold text-amber-400 ring-1 ring-amber-500/40">
//                   04
//                 </span>
//                 <div>
//                   <h2 className="text-lg font-bold text-white">
//                     Additional Information
//                   </h2>
//                   <p className="text-xs text-slate-400">
//                     Portfolio, bio & profile avatar
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-5">
//               {/* Website */}
//               <div>
//                 <label
//                   htmlFor="website"
//                   className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300"
//                 >
//                   Portfolio / Website URL{" "}
//                   <span className="text-rose-400">*</span>
//                 </label>

//                 <div className="relative">
//                   <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
//                     <svg
//                       className="h-5 w-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
//                       />
//                     </svg>
//                   </span>
//                   <input
//                     id="website"
//                     name="website"
//                     type="url"
//                     placeholder="https://github.com/username or your portfolio"
//                     value={formData.website}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`w-full rounded-xl border pl-11 pr-4 py-3 text-sm font-medium transition-all duration-200 outline-none ${
//                       touched.website && errors.website
//                         ? "border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20"
//                         : "border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 hover:border-slate-600 focus:border-indigo-500 focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20"
//                     }`}
//                   />
//                 </div>
//                 <FieldError name="website" errors={errors} touched={touched} />
//               </div>

//               {/* Search Topic */}
//               <div>
//                 <label
//                   htmlFor="topicSearch"
//                   className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300"
//                 >
//                   Key Topic to Explore <span className="text-rose-400">*</span>
//                 </label>

//                 <div className="relative">
//                   <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
//                     <svg
//                       className="h-5 w-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                       />
//                     </svg>
//                   </span>
//                   <input
//                     id="topicSearch"
//                     name="topicSearch"
//                     type="search"
//                     placeholder="e.g. React 19, Microfrontends, AI Agents"
//                     value={formData.topicSearch}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`w-full rounded-xl border pl-11 pr-4 py-3 text-sm font-medium transition-all duration-200 outline-none ${
//                       touched.topicSearch && errors.topicSearch
//                         ? "border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20"
//                         : "border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 hover:border-slate-600 focus:border-indigo-500 focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20"
//                     }`}
//                   />
//                 </div>

//                 {/* Topic suggestions chips */}
//                 <div className="mt-2 flex flex-wrap items-center gap-1.5">
//                   <span className="text-xs text-slate-400">Suggestions:</span>
//                   {[
//                     "React 19",
//                     "Server Components",
//                     "AI Agents",
//                     "Tailwind v4",
//                   ].map((topic) => (
//                     <button
//                       key={topic}
//                       type="button"
//                       onClick={() => {
//                         const eventObj = {
//                           target: {
//                             name: "topicSearch",
//                             value: topic,
//                             type: "search",
//                           },
//                         };
//                         handleChange(eventObj);
//                         handleBlur(eventObj);
//                       }}
//                       className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-300 hover:bg-slate-700 hover:text-white transition border border-slate-700"
//                     >
//                       +{topic}
//                     </button>
//                   ))}
//                 </div>
//                 <FieldError
//                   name="topicSearch"
//                   errors={errors}
//                   touched={touched}
//                 />
//               </div>

//               {/* Short Bio with Dynamic Progress Bar */}
//               <div>
//                 <div className="mb-1.5 flex items-center justify-between">
//                   <label
//                     htmlFor="bio"
//                     className="text-xs font-semibold uppercase tracking-wider text-slate-300"
//                   >
//                     Short Bio <span className="text-rose-400">*</span>
//                   </label>
//                   <span className="text-xs font-mono text-slate-400">
//                     {formData.bio.length} / 300 characters
//                   </span>
//                 </div>

//                 <textarea
//                   id="bio"
//                   name="bio"
//                   rows={4}
//                   maxLength={300}
//                   placeholder="Share a brief overview of your background, current projects, and what you're hoping to build or learn..."
//                   value={formData.bio}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full resize-none rounded-xl border p-4 text-sm font-medium transition-all duration-200 outline-none ${
//                     touched.bio && errors.bio
//                       ? "border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20"
//                       : "border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 hover:border-slate-600 focus:border-indigo-500 focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20"
//                   }`}
//                 />

//                 {/* Progress bar */}
//                 <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-slate-800">
//                   <div
//                     className={`h-full transition-all duration-200 ${
//                       formData.bio.length > 270
//                         ? "bg-rose-500"
//                         : formData.bio.length > 180
//                           ? "bg-amber-500"
//                           : "bg-indigo-500"
//                     }`}
//                     style={{
//                       width: `${Math.min(100, (formData.bio.length / 300) * 100)}%`,
//                     }}
//                   />
//                 </div>
//                 <FieldError name="bio" errors={errors} touched={touched} />
//               </div>

//               {/* Profile Photo Upload Dropzone */}
//               <div>
//                 <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">
//                   Profile Photo{" "}
//                   <span className="text-slate-400">(Optional)</span>
//                 </label>

//                 <div className="relative group">
//                   <input
//                     ref={fileInputRef}
//                     id="profilePhoto"
//                     name="profilePhoto"
//                     type="file"
//                     accept=".jpg,.jpeg,.png,.webp"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
//                   />
//                   <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-700 bg-slate-800/40 p-6 text-center transition group-hover:border-indigo-500 group-hover:bg-slate-800/60">
//                     <span className="text-3xl">📷</span>
//                     {formData.profilePhoto ? (
//                       <div className="mt-2">
//                         <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
//                           ✓ {formData.profilePhoto.name}
//                         </span>
//                         <p className="mt-1 text-xs text-slate-400">
//                           {(formData.profilePhoto.size / 1024).toFixed(1)} KB —
//                           Click to replace
//                         </p>
//                       </div>
//                     ) : (
//                       <div className="mt-2">
//                         <p className="text-sm font-medium text-slate-300">
//                           Click to browse or drop image here
//                         </p>
//                         <p className="mt-0.5 text-xs text-slate-400">
//                           JPG, PNG, or WEBP up to 2MB
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <FieldError
//                   name="profilePhoto"
//                   errors={errors}
//                   touched={touched}
//                 />
//               </div>
//             </div>
//           </section>

//           {/* -------------------------------- */}
//           {/* 05: TERMS & POLICIES             */}
//           {/* -------------------------------- */}

//           <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
//             <label className="flex cursor-pointer items-start gap-3">
//               <input
//                 id="termsAccepted"
//                 name="termsAccepted"
//                 type="checkbox"
//                 checked={formData.termsAccepted}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-800 text-indigo-600 accent-indigo-600 focus:ring-indigo-500"
//               />
//               <span className="text-sm text-slate-300">
//                 I agree to the{" "}
//                 <span className="text-indigo-400 underline decoration-indigo-400/50 underline-offset-2">
//                   Conference Code of Conduct
//                 </span>{" "}
//                 and acknowledge the event privacy policies.
//               </span>
//             </label>
//             <FieldError
//               name="termsAccepted"
//               errors={errors}
//               touched={touched}
//             />
//           </section>

//           {/* -------------------------------- */}
//           {/* SUBMIT BUTTON                    */}
//           {/* -------------------------------- */}

//           <button
//             type="submit"
//             className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 py-4 px-8 text-base font-bold text-white shadow-xl shadow-indigo-600/25 transition-all duration-200 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-600 hover:shadow-2xl hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:translate-y-0"
//           >
//             <span>Complete Registration & Generate VIP Pass</span>
//             <span className="transition-transform duration-200 group-hover:translate-x-1">
//               →
//             </span>
//           </button>
//         </form>

//         {/* -------------------------------- */}
//         {/* SUCCESS / VIP PASS CARD          */}
//         {/* -------------------------------- */}

//         {submittedFormData && (
//           <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 shadow-2xl backdrop-blur-xl">
//             {/* Top Color Banner */}
//             <div
//               className="py-3 px-6 text-center font-black tracking-widest text-xs uppercase text-white shadow-sm"
//               style={{ backgroundColor: submittedFormData.badgeColor }}
//             >
//               ★ OFFICIAL VIP ATTENDEE PASS • TECHCON 2026 ★
//             </div>

//             <div className="p-6 md:p-8">
//               <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-6">
//                 <div>
//                   <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-0.5 text-xs font-bold text-emerald-300">
//                     <span>✓</span> Registration Verified & Confirmed
//                   </div>
//                   <h3 className="mt-2 text-2xl font-black text-white">
//                     {submittedFormData.fullName}
//                   </h3>
//                   <p className="text-sm text-slate-400">
//                     {submittedFormData.email} • {submittedFormData.phone}
//                   </p>
//                 </div>

//                 <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4 text-center">
//                   <div className="text-xs uppercase tracking-wider text-slate-400">
//                     Total Passes
//                   </div>
//                   <div className="text-3xl font-black text-indigo-400">
//                     {submittedFormData.tickets}
//                   </div>
//                   <div className="text-[11px] text-slate-400 uppercase">
//                     {submittedFormData.attendance}
//                   </div>
//                 </div>
//               </div>

//               {/* Pass Details Grid */}
//               <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm">
//                 <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-3.5">
//                   <div className="text-xs text-slate-400">Country</div>
//                   <div className="mt-1 font-bold text-white capitalize">
//                     {submittedFormData.country}
//                   </div>
//                 </div>

//                 <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-3.5">
//                   <div className="text-xs text-slate-400">Experience</div>
//                   <div className="mt-1 font-bold text-white">
//                     {experienceLevels[submittedFormData.experienceLevel]}
//                   </div>
//                 </div>

//                 <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-3.5">
//                   <div className="text-xs text-slate-400">Event Schedule</div>
//                   <div className="mt-1 font-bold text-white">
//                     {submittedFormData.eventDate} @{" "}
//                     {submittedFormData.eventTime}
//                   </div>
//                 </div>

//                 <div className="sm:col-span-2 md:col-span-3 rounded-xl border border-slate-800 bg-slate-800/40 p-3.5">
//                   <div className="text-xs text-slate-400">
//                     Registered Tracks
//                   </div>
//                   <div className="mt-2 flex flex-wrap gap-2">
//                     {submittedFormData.interests.map((track) => (
//                       <span
//                         key={track}
//                         className="rounded-lg bg-indigo-500/20 px-2.5 py-1 text-xs font-bold text-indigo-300 ring-1 ring-indigo-500/40 capitalize"
//                       >
//                         {track}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {submittedFormData.bio && (
//                   <div className="sm:col-span-2 md:col-span-3 rounded-xl border border-slate-800 bg-slate-800/40 p-3.5">
//                     <div className="text-xs text-slate-400">Attendee Bio</div>
//                     <p className="mt-1 text-xs leading-relaxed text-slate-300 italic">
//                       "{submittedFormData.bio}"
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* Ticket Footer / Barcode */}
//               <div className="mt-6 flex flex-col sm:flex-row items-center justify-between border-t border-dashed border-slate-800 pt-5 gap-4">
//                 <div className="font-mono text-xs text-slate-400">
//                   PASS CODE: TS26-{submittedFormData.passCode} • PHOTO:{" "}
//                   {submittedFormData.profilePhotoName || "NONE"}
//                 </div>
//                 <div className="flex items-center gap-1 opacity-60">
//                   {[3, 5, 2, 4, 6, 2, 5, 3, 1, 4, 5, 2, 6, 4].map((h, i) => (
//                     <div
//                       key={i}
//                       className="bg-white"
//                       style={{
//                         width: `${(i % 2) + 2}px`,
//                         height: `${h * 4}px`,
//                       }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// const initialFormData = {
//   fullName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
//   phone: "",
//   age: "",
//   eventDate: "",
//   website: "",
//   tickets: "",
//   country: "",
//   attendance: "",
//   interests: [],
//   bio: "",
//   profilePhoto: null,
//   termsAccepted: false,
//   experienceLevel: 5,
//   badgeColor: "#4f46e5",
// };

// function getTodayDate() {
//   const now = new Date();
//   const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);

//   return localDate.toISOString().slice(0, 10);
// }

// function App() {
//   const [formData, setFormData] = useState(initialFormData);

//   const [errors, setErrors] = useState({});

//   const [submittedFormData, setSubmittedFormData] = useState(null);

//   function handleChange(event) {
//     const { name, value, type, checked, files } = event.target;

//     // Phone input: only digits (max 10)
//     if (name === "phone") {
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);

//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         phone: digitsOnly,
//       }));

//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         phone: "",
//       }));

//       return;
//     }

//     // File input
//     if (type === "file") {
//       const file = files?.[0] ?? null;

//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         [name]: file,
//       }));

//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         [name]: "",
//       }));

//       return;
//     }

//     // Checkbox group
//     if (type === "checkbox" && name === "interests") {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         interests: checked
//           ? [...prevFormData.interests, value]
//           : prevFormData.interests.filter((interest) => interest !== value),
//       }));

//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         interests: "",
//       }));

//       return;
//     }

//     // Single checkbox
//     if (type === "checkbox") {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         [name]: checked,
//       }));

//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         [name]: "",
//       }));

//       return;
//     }

//     // Normal controls:
//     // text, email, password, tel, number,
//     // date, url, select, radio, textarea, range, color
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   }

//   function validateForm() {
//     const newErrors = {};

//     // -------------------------
//     // Full Name
//     // -------------------------
//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     }

//     // -------------------------
//     // Email
//     // -------------------------
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!emailPattern.test(formData.email.trim())) {
//       newErrors.email = "Enter a valid email";
//     }

//     // -------------------------
//     // Password
//     // -------------------------
//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 8) {
//       newErrors.password = "Password must contain at least 8 characters";
//     } else if (!/[A-Z]/.test(formData.password)) {
//       newErrors.password =
//         "Password must contain at least one uppercase letter";
//     } else if (!/[a-z]/.test(formData.password)) {
//       newErrors.password =
//         "Password must contain at least one lowercase letter";
//     } else if (!/\d/.test(formData.password)) {
//       newErrors.password = "Password must contain at least one number";
//     }

//     // -------------------------
//     // Confirm Password
//     // -------------------------
//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = "Please confirm your password";
//     } else if (formData.confirmPassword !== formData.password) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     // -------------------------
//     // Phone
//     // -------------------------
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (formData.phone.length !== 10) {
//       newErrors.phone = "Phone number must be exactly 10 digits";
//     }

//     // -------------------------
//     // Age
//     // -------------------------
//     if (!formData.age.trim()) {
//       newErrors.age = "Age is required";
//     } else {
//       const age = Number(formData.age);

//       if (!Number.isInteger(age)) {
//         newErrors.age = "Age must be a whole number";
//       } else if (age < 18) {
//         newErrors.age = "You must be at least 18 years old";
//       } else if (age > 100) {
//         newErrors.age = "Enter a valid age";
//       }
//     }

//     // -------------------------
//     // Event Date
//     // -------------------------
//     const today = getTodayDate();

//     if (!formData.eventDate) {
//       newErrors.eventDate = "Please select an event date";
//     } else if (formData.eventDate < today) {
//       newErrors.eventDate = "Event date cannot be in the past";
//     }

//     // -------------------------
//     // Website - optional
//     // -------------------------
//     if (formData.website.trim()) {
//       try {
//         const websiteUrl = new URL(formData.website.trim());

//         if (
//           websiteUrl.protocol !== "http:" &&
//           websiteUrl.protocol !== "https:"
//         ) {
//           newErrors.website = "Website must start with http:// or https://";
//         }
//       } catch {
//         newErrors.website = "Enter a valid website URL";
//       }
//     }

//     // -------------------------
//     // Number of Tickets
//     // -------------------------
//     if (!formData.tickets.trim()) {
//       newErrors.tickets = "Number of tickets is required";
//     } else {
//       const ticketCount = Number(formData.tickets);

//       if (!Number.isInteger(ticketCount)) {
//         newErrors.tickets = "Number of tickets must be a whole number";
//       } else if (ticketCount < 1) {
//         newErrors.tickets = "Minimum 1 ticket";
//       } else if (ticketCount > 5) {
//         newErrors.tickets = "Maximum 5 tickets";
//       }
//     }

//     // -------------------------
//     // Country
//     // -------------------------
//     if (!formData.country) {
//       newErrors.country = "Please select your country";
//     }

//     // -------------------------
//     // Radio
//     // -------------------------
//     if (!formData.attendance) {
//       newErrors.attendance = "Please select an attendance type";
//     }

//     // -------------------------
//     // Checkbox Group
//     // -------------------------
//     if (formData.interests.length === 0) {
//       newErrors.interests = "Select at least one interest";
//     }

//     // -------------------------
//     // Bio / Textarea
//     // -------------------------
//     if (!formData.bio.trim()) {
//       newErrors.bio = "Bio is required";
//     } else if (formData.bio.trim().length < 20) {
//       newErrors.bio = "Bio must contain at least 20 characters";
//     } else if (formData.bio.trim().length > 300) {
//       newErrors.bio = "Bio cannot exceed 300 characters";
//     }

//     // -------------------------
//     // Profile Photo
//     // -------------------------
//     if (formData.profilePhoto) {
//       const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

//       const maxFileSize = 2 * 1024 * 1024;

//       if (!allowedTypes.includes(formData.profilePhoto.type)) {
//         newErrors.profilePhoto = "Only JPG, PNG and WebP images are allowed";
//       } else if (formData.profilePhoto.size > maxFileSize) {
//         newErrors.profilePhoto = "Image size must be 2MB or less";
//       }
//     }

//     // -------------------------
//     // Terms Checkbox
//     // -------------------------
//     if (!formData.termsAccepted) {
//       newErrors.termsAccepted = "You must accept the terms and conditions";
//     }

//     return newErrors;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const newErrors = validateForm();

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) {
//       setSubmittedFormData(null);
//       return;
//     }

//     setSubmittedFormData({
//       ...formData,
//       profilePhotoName: formData.profilePhoto?.name || "",
//     });

//     setFormData({
//       ...initialFormData,
//       interests: [],
//     });

//     setErrors({});
//   }

//   return (
//     <div className="min-h-screen bg-slate-100 px-4 py-10">
//       <div className="mx-auto w-full max-w-3xl space-y-8">
//         {/* Form Card */}

//         <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
//           <div className="mb-8">
//             <p className="mb-2 text-sm font-semibold text-indigo-600">
//               TECH CONFERENCE 2026
//             </p>

//             <h1 className="text-3xl font-bold text-slate-900">
//               Conference Registration
//             </h1>

//             <p className="mt-2 text-sm text-slate-500">
//               Complete your profile and reserve your conference pass.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} noValidate className="space-y-6">
//             {/* Full Name */}

//             <div>
//               <label
//                 htmlFor="fullName"
//                 className="mb-2 block text-sm font-medium text-slate-700"
//               >
//                 Full Name
//               </label>

//               <input
//                 id="fullName"
//                 type="text"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 placeholder="e.g. Jordan Lee"
//                 className={`w-full rounded-lg border px-4 py-3 outline-none ${
//                   errors.fullName
//                     ? "border-red-500"
//                     : "border-slate-300 focus:border-indigo-500"
//                 }`}
//               />

//               {errors.fullName && (
//                 <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
//               )}
//             </div>

//             {/* Email */}

//             <div>
//               <label
//                 htmlFor="email"
//                 className="mb-2 block text-sm font-medium text-slate-700"
//               >
//                 Email
//               </label>

//               <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="jordan@example.com"
//                 className={`w-full rounded-lg border px-4 py-3 outline-none ${
//                   errors.email
//                     ? "border-red-500"
//                     : "border-slate-300 focus:border-indigo-500"
//                 }`}
//               />

//               {errors.email && (
//                 <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//               )}
//             </div>

//             {/* Password */}

//             <div className="grid gap-6 sm:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="mb-2 block text-sm font-medium text-slate-700"
//                 >
//                   Password
//                 </label>

//                 <input
//                   id="password"
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Create password"
//                   className={`w-full rounded-lg border px-4 py-3 outline-none ${
//                     errors.password
//                       ? "border-red-500"
//                       : "border-slate-300 focus:border-indigo-500"
//                   }`}
//                 />

//                 {errors.password && (
//                   <p className="mt-1 text-sm text-red-600">{errors.password}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="confirmPassword"
//                   className="mb-2 block text-sm font-medium text-slate-700"
//                 >
//                   Confirm Password
//                 </label>

//                 <input
//                   id="confirmPassword"
//                   type="password"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   placeholder="Confirm password"
//                   className={`w-full rounded-lg border px-4 py-3 outline-none ${
//                     errors.confirmPassword
//                       ? "border-red-500"
//                       : "border-slate-300 focus:border-indigo-500"
//                   }`}
//                 />

//                 {errors.confirmPassword && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.confirmPassword}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Phone + Age */}

//             <div className="grid gap-6 sm:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="mb-2 block text-sm font-medium text-slate-700"
//                 >
//                   Phone
//                 </label>

//                 <input
//                   id="phone"
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   inputMode="numeric"
//                   maxLength={10}
//                   placeholder="10-digit mobile number"
//                   className={`w-full rounded-lg border px-4 py-3 outline-none ${
//                     errors.phone
//                       ? "border-red-500"
//                       : "border-slate-300 focus:border-indigo-500"
//                   }`}
//                 />

//                 {errors.phone && (
//                   <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="age"
//                   className="mb-2 block text-sm font-medium text-slate-700"
//                 >
//                   Age
//                 </label>

//                 <input
//                   id="age"
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   min="18"
//                   max="100"
//                   step="1"
//                   placeholder="18 - 100"
//                   className={`w-full rounded-lg border px-4 py-3 outline-none ${
//                     errors.age
//                       ? "border-red-500"
//                       : "border-slate-300 focus:border-indigo-500"
//                   }`}
//                 />

//                 {errors.age && (
//                   <p className="mt-1 text-sm text-red-600">{errors.age}</p>
//                 )}
//               </div>
//             </div>

//             {/* Event Date + Tickets */}

//             <div className="grid gap-6 sm:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="eventDate"
//                   className="mb-2 block text-sm font-medium text-slate-700"
//                 >
//                   Event Date
//                 </label>

//                 <input
//                   id="eventDate"
//                   type="date"
//                   name="eventDate"
//                   min={getTodayDate()}
//                   value={formData.eventDate}
//                   onChange={handleChange}
//                   className={`w-full rounded-lg border px-4 py-3 outline-none ${
//                     errors.eventDate
//                       ? "border-red-500"
//                       : "border-slate-300 focus:border-indigo-500"
//                   }`}
//                 />

//                 {errors.eventDate && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.eventDate}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="tickets"
//                   className="mb-2 block text-sm font-medium text-slate-700"
//                 >
//                   Number of Tickets
//                 </label>

//                 <input
//                   id="tickets"
//                   type="number"
//                   name="tickets"
//                   min="1"
//                   max="5"
//                   step="1"
//                   value={formData.tickets}
//                   onChange={handleChange}
//                   placeholder="1 - 5"
//                   className={`w-full rounded-lg border px-4 py-3 outline-none ${
//                     errors.tickets
//                       ? "border-red-500"
//                       : "border-slate-300 focus:border-indigo-500"
//                   }`}
//                 />

//                 {errors.tickets && (
//                   <p className="mt-1 text-sm text-red-600">{errors.tickets}</p>
//                 )}
//               </div>
//             </div>

//             {/* Website */}

//             <div>
//               <label
//                 htmlFor="website"
//                 className="mb-2 block text-sm font-medium text-slate-700"
//               >
//                 Personal Website
//                 <span className="ml-2 text-xs text-slate-400">Optional</span>
//               </label>

//               <input
//                 id="website"
//                 type="url"
//                 name="website"
//                 value={formData.website}
//                 onChange={handleChange}
//                 placeholder="https://example.com"
//                 className={`w-full rounded-lg border px-4 py-3 outline-none ${
//                   errors.website
//                     ? "border-red-500"
//                     : "border-slate-300 focus:border-indigo-500"
//                 }`}
//               />

//               {errors.website && (
//                 <p className="mt-1 text-sm text-red-600">{errors.website}</p>
//               )}
//             </div>

//             {/* Country */}

//             <div>
//               <label
//                 htmlFor="country"
//                 className="mb-2 block text-sm font-medium text-slate-700"
//               >
//                 Country
//               </label>

//               <select
//                 id="country"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className={`w-full rounded-lg border bg-white px-4 py-3 outline-none ${
//                   errors.country
//                     ? "border-red-500"
//                     : "border-slate-300 focus:border-indigo-500"
//                 }`}
//               >
//                 <option value="">Select your country</option>

//                 <option value="india">India</option>
//                 <option value="usa">United States</option>
//                 <option value="uk">United Kingdom</option>
//                 <option value="canada">Canada</option>
//                 <option value="australia">Australia</option>
//               </select>

//               {errors.country && (
//                 <p className="mt-1 text-sm text-red-600">{errors.country}</p>
//               )}
//             </div>

//             {/* Radio */}

//             <fieldset>
//               <legend className="mb-3 text-sm font-medium text-slate-700">
//                 Attendance Type
//               </legend>

//               <div className="grid gap-3 sm:grid-cols-3">
//                 {[
//                   ["in-person", "In Person"],
//                   ["virtual", "Virtual"],
//                   ["hybrid", "Hybrid"],
//                 ].map(([value, label]) => (
//                   <label
//                     key={value}
//                     className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 p-3 hover:bg-slate-50"
//                   >
//                     <input
//                       type="radio"
//                       name="attendance"
//                       value={value}
//                       checked={formData.attendance === value}
//                       onChange={handleChange}
//                     />

//                     <span className="text-sm text-slate-700">{label}</span>
//                   </label>
//                 ))}
//               </div>

//               {errors.attendance && (
//                 <p className="mt-1 text-sm text-red-600">{errors.attendance}</p>
//               )}
//             </fieldset>

//             {/* Checkbox Group */}

//             <fieldset>
//               <legend className="mb-3 text-sm font-medium text-slate-700">
//                 Areas of Interest
//               </legend>

//               <div className="grid gap-3 sm:grid-cols-2">
//                 {[
//                   ["react", "React"],
//                   ["javascript", "JavaScript"],
//                   ["design", "UI/UX Design"],
//                   ["cloud", "Cloud & DevOps"],
//                 ].map(([value, label]) => (
//                   <label
//                     key={value}
//                     className="flex cursor-pointer items-center gap-2"
//                   >
//                     <input
//                       type="checkbox"
//                       name="interests"
//                       value={value}
//                       checked={formData.interests.includes(value)}
//                       onChange={handleChange}
//                     />

//                     <span className="text-sm text-slate-700">{label}</span>
//                   </label>
//                 ))}
//               </div>

//               {errors.interests && (
//                 <p className="mt-1 text-sm text-red-600">{errors.interests}</p>
//               )}
//             </fieldset>

//             {/* Range */}

//             <div>
//               <div className="mb-2 flex items-center justify-between">
//                 <label
//                   htmlFor="experienceLevel"
//                   className="text-sm font-medium text-slate-700"
//                 >
//                   Technology Experience Level
//                 </label>

//                 <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">
//                   {formData.experienceLevel}/10
//                 </span>
//               </div>

//               <input
//                 id="experienceLevel"
//                 type="range"
//                 name="experienceLevel"
//                 min="1"
//                 max="10"
//                 step="1"
//                 value={formData.experienceLevel}
//                 onChange={handleChange}
//                 className="w-full"
//               />
//             </div>

//             {/* Color */}

//             <div>
//               <label
//                 htmlFor="badgeColor"
//                 className="mb-2 block text-sm font-medium text-slate-700"
//               >
//                 Badge Color
//               </label>

//               <div className="flex items-center gap-4">
//                 <input
//                   id="badgeColor"
//                   type="color"
//                   name="badgeColor"
//                   value={formData.badgeColor}
//                   onChange={handleChange}
//                   className="h-12 w-20 cursor-pointer rounded-lg border border-slate-300 bg-white p-1"
//                 />

//                 <span className="text-sm text-slate-500">
//                   {formData.badgeColor}
//                 </span>
//               </div>
//             </div>

//             {/* Interests / Bio */}

//             <div>
//               <label
//                 htmlFor="bio"
//                 className="mb-2 block text-sm font-medium text-slate-700"
//               >
//                 Short Bio
//               </label>

//               <textarea
//                 id="bio"
//                 name="bio"
//                 rows={5}
//                 maxLength={300}
//                 value={formData.bio}
//                 onChange={handleChange}
//                 placeholder="Tell us about yourself..."
//                 className={`w-full resize-none rounded-lg border px-4 py-3 outline-none ${
//                   errors.bio
//                     ? "border-red-500"
//                     : "border-slate-300 focus:border-indigo-500"
//                 }`}
//               />

//               <div className="mt-1 flex justify-between">
//                 {errors.bio ? (
//                   <p className="text-sm text-red-600">{errors.bio}</p>
//                 ) : (
//                   <span />
//                 )}

//                 <span className="text-xs text-slate-400">
//                   {formData.bio.length}/300
//                 </span>
//               </div>
//             </div>

//             {/* File */}

//             <div>
//               <label
//                 htmlFor="profilePhoto"
//                 className="mb-2 block text-sm font-medium text-slate-700"
//               >
//                 Profile Photo
//                 <span className="ml-2 text-xs text-slate-400">
//                   Optional · JPG/PNG/WebP · max 2MB
//                 </span>
//               </label>

//               <input
//                 id="profilePhoto"
//                 type="file"
//                 name="profilePhoto"
//                 accept="image/jpeg,image/png,image/webp"
//                 onChange={handleChange}
//                 className="block w-full rounded-lg border border-slate-300 p-2 text-sm"
//               />

//               {formData.profilePhoto && (
//                 <p className="mt-2 text-sm text-slate-500">
//                   Selected: {formData.profilePhoto.name}
//                 </p>
//               )}

//               {errors.profilePhoto && (
//                 <p className="mt-1 text-sm text-red-600">
//                   {errors.profilePhoto}
//                 </p>
//               )}
//             </div>

//             {/* Terms */}

//             <div>
//               <label className="flex cursor-pointer items-start gap-3">
//                 <input
//                   type="checkbox"
//                   name="termsAccepted"
//                   checked={formData.termsAccepted}
//                   onChange={handleChange}
//                   className="mt-1"
//                 />

//                 <span className="text-sm text-slate-600">
//                   I agree to the conference terms and conditions.
//                 </span>
//               </label>

//               {errors.termsAccepted && (
//                 <p className="mt-1 text-sm text-red-600">
//                   {errors.termsAccepted}
//                 </p>
//               )}
//             </div>

//             {/* Submit */}

//             <button
//               type="submit"
//               className="w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
//             >
//               Complete Registration
//             </button>
//           </form>
//         </div>

//         {/* Success Card */}

//         {submittedFormData && (
//           <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-lg">
//             <div className="mb-5">
//               <p className="text-sm font-semibold text-emerald-600">SUCCESS</p>

//               <h2 className="text-2xl font-bold text-emerald-900">
//                 Registration Confirmed
//               </h2>
//             </div>

//             <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
//               <p>
//                 <strong>Name:</strong> {submittedFormData.fullName}
//               </p>

//               <p>
//                 <strong>Email:</strong> {submittedFormData.email}
//               </p>

//               <p>
//                 <strong>Phone:</strong> {submittedFormData.phone}
//               </p>

//               <p>
//                 <strong>Age:</strong> {submittedFormData.age}
//               </p>

//               <p>
//                 <strong>Event Date:</strong> {submittedFormData.eventDate}
//               </p>

//               <p>
//                 <strong>Tickets:</strong> {submittedFormData.tickets}
//               </p>

//               <p>
//                 <strong>Country:</strong> {submittedFormData.country}
//               </p>

//               <p>
//                 <strong>Attendance:</strong> {submittedFormData.attendance}
//               </p>

//               <p>
//                 <strong>Interests:</strong>{" "}
//                 {submittedFormData.interests.join(", ")}
//               </p>

//               <p>
//                 <strong>Experience:</strong> {submittedFormData.experienceLevel}
//                 /10
//               </p>

//               <p>
//                 <strong>Badge Color:</strong> {submittedFormData.badgeColor}
//               </p>

//               <p>
//                 <strong>Photo:</strong>{" "}
//                 {submittedFormData.profilePhotoName || "Not uploaded"}
//               </p>
//             </div>

//             <div className="mt-4 rounded-lg bg-white/70 p-4">
//               <p className="text-sm font-medium text-slate-700">Bio</p>

//               <p className="mt-1 text-sm text-slate-600">
//                 {submittedFormData.bio}
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     tickets: "",
//   });

//   const [errors, setErrors] = useState({});

//   const [submittedFormData, setSubmittedFormData] = useState(null);

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   }

//   function validateForm() {
//     const newErrors = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!emailPattern.test(formData.email)) {
//       newErrors.email = "Enter a valid email";
//     }

//     const ticketCount = Number(formData.tickets);

//     if (!formData.tickets.trim()) {
//       newErrors.tickets = "Number of tickets is required";
//     } else if (!Number.isInteger(ticketCount)) {
//       newErrors.tickets = "Number of tickets must be a whole number";
//     } else if (ticketCount < 1) {
//       newErrors.tickets = "Minimum 1 ticket";
//     } else if (ticketCount > 5) {
//       newErrors.tickets = "Maximum 5 tickets";
//     }

//     return newErrors;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const newErrors = validateForm();

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) {
//       return;
//     }

//     setSubmittedFormData(formData);

//     setFormData({
//       fullName: "",
//       email: "",
//       tickets: "",
//     });
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-12 px-4 sm:px-6 flex flex-col items-center justify-center gap-8 text-slate-100">
//       {/* 1. Event Registration Card */}
//       <div className="w-full max-w-lg rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl p-6 sm:p-8 text-left transition-all">
//         {/* Header Badge & Title */}
//         <div className="mb-6">
//           <div className="flex items-center gap-2 mb-2">
//             <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
//               <span>🎟️</span> Tech Summit 2026
//             </span>
//             <span className="text-xs text-slate-400">• Limited Passes</span>
//           </div>

//           <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
//             Event Registration
//           </h1>
//           <p className="text-sm text-slate-400 mt-1">
//             Fill in your details below to reserve your entry pass.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} noValidate className="space-y-5">
//           {/* Full Name */}
//           <div>
//             <label
//               htmlFor="fullName"
//               className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
//             >
//               Full Name
//             </label>

//             <input
//               id="fullName"
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               placeholder="e.g. Alex Morgan"
//               className={`w-full rounded-xl bg-slate-800/70 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition duration-150 border ${
//                 errors.fullName
//                   ? "border-rose-500/90 ring-2 ring-rose-500/20"
//                   : "border-slate-700/80 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/20"
//               }`}
//             />

//             {errors.fullName && (
//               <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-400">
//                 <span>⚠</span> {errors.fullName}
//               </p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
//             >
//               Email Address
//             </label>

//             <input
//               id="email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="alex@example.com"
//               className={`w-full rounded-xl bg-slate-800/70 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition duration-150 border ${
//                 errors.email
//                   ? "border-rose-500/90 ring-2 ring-rose-500/20"
//                   : "border-slate-700/80 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/20"
//               }`}
//             />

//             {errors.email && (
//               <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-400">
//                 <span>⚠</span> {errors.email}
//               </p>
//             )}
//           </div>

//           {/* Number of tickets */}
//           <div>
//             <div className="flex items-center justify-between mb-1.5">
//               <label
//                 htmlFor="tickets"
//                 className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
//               >
//                 Number of Tickets
//               </label>
//               <span className="text-xs text-slate-400">1 – 5 tickets</span>
//             </div>

//             <input
//               id="tickets"
//               name="tickets"
//               value={formData.tickets}
//               onChange={handleChange}
//               type="number"
//               placeholder="Enter ticket quantity"
//               className={`w-full rounded-xl bg-slate-800/70 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition duration-150 border ${
//                 errors.tickets
//                   ? "border-rose-500/90 ring-2 ring-rose-500/20"
//                   : "border-slate-700/80 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/20"
//               }`}
//             />

//             {errors.tickets && (
//               <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-400">
//                 <span>⚠</span> {errors.tickets}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition duration-150 hover:from-indigo-400 hover:to-purple-500 hover:shadow-indigo-500/40 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
//           >
//             <span>Complete Registration</span>
//             <span aria-hidden="true">→</span>
//           </button>
//         </form>
//       </div>

//       {/* 2. Success Result Pass / Ticket (Visually Separate) */}
//       {submittedFormData && (
//         <div className="w-full max-w-lg rounded-3xl bg-slate-900/95 backdrop-blur-xl border border-indigo-500/30 shadow-2xl p-6 sm:p-8 text-left relative overflow-hidden transition-all duration-300">
//           {/* Decorative accent top bar */}
//           <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-indigo-400 to-purple-500" />

//           {/* Ticket Header */}
//           <div className="flex items-center justify-between pb-4 border-b border-slate-800">
//             <div className="flex items-center gap-2">
//               <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold">
//                 ✓
//               </span>
//               <span className="text-sm font-bold text-white tracking-wide">
//                 Registration Confirmed
//               </span>
//             </div>
//             <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
//               VIP ENTRY PASS
//             </span>
//           </div>

//           {/* Attendee Details */}
//           <div className="py-5 space-y-4">
//             <div>
//               <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
//                 Attendee Name
//               </span>
//               <p className="text-xl font-bold text-white mt-0.5">
//                 {submittedFormData.fullName}
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-4 pt-1">
//               <div>
//                 <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
//                   Email Address
//                 </span>
//                 <p className="text-sm font-medium text-slate-200 mt-0.5 truncate">
//                   {submittedFormData.email}
//                 </p>
//               </div>

//               <div>
//                 <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
//                   Quantity
//                 </span>
//                 <p className="text-sm font-bold text-amber-400 mt-0.5">
//                   🎟️ {submittedFormData.tickets} Ticket
//                   {submittedFormData.tickets !== "1" ? "s" : ""}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Perforated Stub Line */}
//           <div className="relative py-2 flex items-center">
//             <div className="w-full border-t-2 border-dashed border-slate-700/80" />
//           </div>

//           {/* Ticket Footer */}
//           <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
//             <span className="font-mono text-[11px] text-slate-500">
//               PASS #TS-2026-CONFIRMED
//             </span>
//             <span className="text-emerald-400 text-xs font-medium">
//               Ready for Check-in
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     issue: "",
//   });

//   const [errors, setErrors] = useState({});

//   const [submittedFormData, setSubmittedFormData] = useState(null);

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   }

//   function validateForm() {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!emailPattern.test(formData.email)) {
//       newErrors.email = "Enter a valid email";
//     }

//     if (!formData.issue.trim()) {
//       newErrors.issue = "Please describe your issue";
//     }

//     return newErrors;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const newErrors = validateForm();

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) {
//       return;
//     }

//     setSubmittedFormData(formData);

//     setFormData({
//       name: "",
//       email: "",
//       issue: "",
//     });
//   }

//   return (
//     <div className="min-h-screen bg-slate-100 px-4 py-10">
//       <div className="mx-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg">
//         <h1 className="mb-6 text-2xl font-bold text-slate-900">
//           Customer Support
//         </h1>

//         <form onSubmit={handleSubmit} noValidate className="space-y-5">
//           {/* Name */}
//           <div>
//             <label
//               htmlFor="name"
//               className="mb-1.5 block text-sm font-medium text-slate-700"
//             >
//               Name
//             </label>

//             <input
//               id="name"
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className={`w-full rounded-lg border px-4 py-2 outline-none ${
//                 errors.name
//                   ? "border-red-500 focus:ring-2 focus:ring-red-100"
//                   : "border-slate-300 focus:border-blue-500"
//               }`}
//             />

//             {errors.name && (
//               <p className="mt-1 text-sm text-red-600">{errors.name}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="mb-1.5 block text-sm font-medium text-slate-700"
//             >
//               Email
//             </label>

//             <input
//               id="email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               className={`w-full rounded-lg border px-4 py-2 outline-none ${
//                 errors.email
//                   ? "border-red-500 focus:ring-2 focus:ring-red-100"
//                   : "border-slate-300 focus:border-blue-500"
//               }`}
//             />

//             {errors.email && (
//               <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//             )}
//           </div>

//           {/* Issue */}
//           <div>
//             <label
//               htmlFor="issue"
//               className="mb-1.5 block text-sm font-medium text-slate-700"
//             >
//               Issue
//             </label>

//             <textarea
//               id="issue"
//               name="issue"
//               value={formData.issue}
//               onChange={handleChange}
//               rows={4}
//               placeholder="Describe your issue"
//               className={`w-full resize-none rounded-lg border px-4 py-2 outline-none ${
//                 errors.issue
//                   ? "border-red-500 focus:ring-2 focus:ring-red-100"
//                   : "border-slate-300 focus:border-blue-500"
//               }`}
//             />

//             {errors.issue && (
//               <p className="mt-1 text-sm text-red-600">{errors.issue}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700"
//           >
//             Submit Request
//           </button>
//         </form>

//         {submittedFormData && (
//           <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-emerald-800">
//             <h2 className="mb-2 font-semibold">
//               Request submitted successfully
//             </h2>

//             <p>Name: {submittedFormData.name}</p>
//             <p>Email: {submittedFormData.email}</p>
//             <p>Issue: {submittedFormData.issue}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     issue: "",
//   });

//   const [errors, setErrors] = useState({});

//   const [submittedFormData, setSubmittedFormData] = useState(null);

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   }

//   function validateForm() {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!formData.email.includes("@")) {
//       newErrors.email = "Enter a valid email";
//     }

//     if (!formData.issue.trim()) {
//       newErrors.issue = "Please describe your issue";
//     }

//     return newErrors;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const newErrors = validateForm();

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) {
//       return;
//     }

//     setSubmittedFormData(formData);

//     setFormData({
//       name: "",
//       email: "",
//       issue: "",
//     });
//   }

//   return (
//     <div className="min-h-screen bg-slate-100 px-4 py-10">
//       <div className="mx-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg">
//         <h1 className="mb-6 text-2xl font-bold text-slate-900">
//           Customer Support
//         </h1>

//         <form onSubmit={handleSubmit} noValidate className="space-y-5">
//           {/* Name */}
//           <div>
//             <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
//               Name
//             </label>

//             <input
//               id="name"
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className={`w-full rounded-lg border px-4 py-2 outline-none ${
//                 errors.name
//                   ? "border-red-500 focus:ring-2 focus:ring-red-100"
//                   : "border-slate-300 focus:border-blue-500"
//               }`}
//               placeholder="Enter your name"
//             />

//             {errors.name && (
//               <p className="mt-1 text-sm text-red-600">{errors.name}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
//               Email
//             </label>

//             <input
//               id="email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`w-full rounded-lg border px-4 py-2 outline-none ${
//                 errors.email
//                   ? "border-red-500 focus:ring-2 focus:ring-red-100"
//                   : "border-slate-300 focus:border-blue-500"
//               }`}
//               placeholder="you@example.com"
//             />

//             {errors.email && (
//               <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//             )}
//           </div>

//           {/* Issue */}
//           <div>
//             <label htmlFor="issue" className="mb-1.5 block text-sm font-medium">
//               Issue
//             </label>

//             <textarea
//               id="issue"
//               name="issue"
//               value={formData.issue}
//               onChange={handleChange}
//               rows={4}
//               className={`w-full resize-none rounded-lg border px-4 py-2 outline-none ${
//                 errors.issue
//                   ? "border-red-500 focus:ring-2 focus:ring-red-100"
//                   : "border-slate-300 focus:border-blue-500"
//               }`}
//               placeholder="Describe your issue"
//             />

//             {errors.issue && (
//               <p className="mt-1 text-sm text-red-600">{errors.issue}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700"
//           >
//             Submit Request
//           </button>
//         </form>

//         {submittedFormData && (
//           <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-emerald-800">
//             <h2 className="mb-2 font-semibold">
//               Request submitted successfully
//             </h2>

//             <p>Name: {submittedFormData.name}</p>
//             <p>Email: {submittedFormData.email}</p>
//             <p>Issue: {submittedFormData.issue}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     productName: "",
//     rating: "",
//     review: "",
//   });

//   const [submittedFormData, setSubmittedFormData] = useState({
//     productName: "",
//     rating: "",
//     review: "",
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     setSubmittedFormData(formData);

//     setFormData({
//       productName: "",
//       rating: "",
//       review: "",
//     });
//   }

//   const ratingNum = Number(submittedFormData.rating) || 0;

//   return (
//     <div className="min-h-screen bg-stone-100 py-12 px-4 flex flex-col items-center justify-center gap-8">
//       {/* 1. Review Form Card */}
//       <div className="w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-xl shadow-stone-200/60 border border-stone-200/80 text-left">
//         {/* Heading & Badge */}
//         <div className="mb-6">
//           <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full">
//             <span>⭐</span> Community Reviews
//           </span>
//           <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2.5 mb-1">
//             Leave a Product Review
//           </h1>
//           <p className="text-sm text-stone-500">
//             Share your feedback to help others find great products.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Product Name */}
//           <div>
//             <label
//               htmlFor="productName"
//               className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
//             >
//               Product Name
//             </label>
//             <input
//               type="text"
//               name="productName"
//               value={formData.productName}
//               onChange={handleChange}
//               placeholder="e.g. Wireless Noise-Cancelling Headphones"
//               required
//               className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-2.5 text-stone-800 placeholder-stone-400 outline-none transition focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
//             />
//           </div>

//           {/* Rating Select */}
//           <div>
//             <label
//               htmlFor="rating"
//               className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
//             >
//               Rating Score
//             </label>
//             <select
//               name="rating"
//               id="rating"
//               value={formData.rating}
//               onChange={handleChange}
//               required
//               className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-2.5 text-stone-800 outline-none transition focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 cursor-pointer"
//             >
//               <option value="">Select your rating</option>
//               <option value="5">⭐⭐⭐⭐⭐ (5.0 - Excellent)</option>
//               <option value="4">⭐⭐⭐⭐ (4.0 - Very Good)</option>
//               <option value="3">⭐⭐⭐ (3.0 - Average)</option>
//               <option value="2">⭐⭐ (2.0 - Poor)</option>
//               <option value="1">⭐ (1.0 - Terrible)</option>
//             </select>
//           </div>

//           {/* Review Textarea */}
//           <div>
//             <label
//               htmlFor="review"
//               className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
//             >
//               Detailed Review
//             </label>
//             <textarea
//               name="review"
//               id="review"
//               rows={4}
//               value={formData.review}
//               onChange={handleChange}
//               placeholder="What did you like or dislike? How does it perform?"
//               required
//               className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-2.5 text-stone-800 placeholder-stone-400 outline-none transition focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 resize-none"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full rounded-xl bg-amber-500 px-6 py-3 font-bold text-stone-950 shadow-md shadow-amber-500/20 transition hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30 active:scale-[0.99] cursor-pointer text-center"
//           >
//             Post Review
//           </button>
//         </form>
//       </div>

//       {/* 2. Success / Result Review Card (Visually Separate) */}
//       {submittedFormData.productName &&
//         submittedFormData.rating &&
//         submittedFormData.review && (
//           <div className="w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-xl shadow-stone-200/60 border border-stone-200/80 text-left transition-all">
//             {/* Reviewer Header */}
//             <div className="flex items-center justify-between pb-4 border-b border-stone-100">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-sm shadow-inner">
//                   ★
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-bold text-stone-900 leading-tight">
//                     Verified Buyer
//                   </h4>
//                   <span className="text-xs text-stone-400">
//                     Published just now
//                   </span>
//                 </div>
//               </div>
//               <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
//                 ✓ Verified Review
//               </span>
//             </div>

//             {/* Product & Stars */}
//             <div className="mt-5 space-y-2">
//               <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
//                 Product
//               </span>
//               <h2 className="text-xl font-bold text-stone-900">
//                 {submittedFormData.productName}
//               </h2>

//               <div className="flex items-center gap-2 pt-1">
//                 <span className="text-amber-400 text-lg tracking-wider">
//                   {"★".repeat(ratingNum) + "☆".repeat(5 - ratingNum)}
//                 </span>
//                 <span className="text-xs font-bold text-stone-700 bg-stone-100 px-2.5 py-0.5 rounded-full">
//                   {submittedFormData.rating}.0 / 5.0
//                 </span>
//               </div>
//             </div>

//             {/* Quote Block */}
//             <div className="mt-4 rounded-xl bg-stone-50 border-l-4 border-amber-400 p-4">
//               <p className="text-sm text-stone-700 leading-relaxed italic">
//                 "{submittedFormData.review}"
//               </p>
//             </div>

//             {/* Helpful Actions Footer */}
//             <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
//               <button
//                 type="button"
//                 className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-stone-100 transition cursor-pointer font-medium text-stone-600"
//               >
//                 👍 Helpful (1)
//               </button>
//             </div>
//           </div>
//         )}
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "",
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-10">
//       <div className="mx-auto w-full max-w-md rounded-xl bg-white p-6 shadow-md">
//         <h1 className="mb-6 text-2xl font-bold">Employee Onboarding</h1>

//         <div className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Employee name"
//             className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
//           />

//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Employee email"
//             className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
//           />

//           <input
//             type="text"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             placeholder="Employee role"
//             className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
//           />
//         </div>

//         <div className="mt-6 rounded-lg bg-gray-50 p-4">
//           <h2 className="mb-3 font-semibold">Live Preview</h2>

//           <p>Name: {formData.name}</p>
//           <p>Email: {formData.email}</p>
//           <p>Role: {formData.role}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [issue, setIssue] = useState("");
//   const [submittedFullName, setSubmittedFullName] = useState("");
//   const [submittedEmail, setSubmittedEmail] = useState("");
//   const [submittedIssue, setSubmittedIssue] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     setSubmittedFullName(fullName);
//     setSubmittedEmail(email);
//     setSubmittedIssue(issue);
//     setFullName("");
//     setEmail("");
//     setIssue("");
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 flex flex-col gap-3 items-center justify-center">
//       <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md">
//         <h1 className="mb-6 text-2xl font-bold">Support Request</h1>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={fullName}
//             onChange={(event) => setFullName(event.target.value)}
//             placeholder="Enter full name"
//             className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
//           />

//           <input
//             type="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             placeholder="Enter email address"
//             className="my-4 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
//           />

//           <textarea
//             value={issue}
//             onChange={(event) => setIssue(event.target.value)}
//             placeholder="Enter issue"
//             className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
//           />

//           <button
//             type="submit"
//             className="mt-4 mb-4 w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
//           >
//             Submit
//           </button>
//         </form>

//         {submittedFullName && submittedEmail && submittedIssue && (
//           <p className="rounded-lg bg-green-50 p-3 text-green-700">
//             ✓ Request submitted successfully!
//           </p>
//         )}
//       </div>

//       <hr />

//       {submittedFullName && submittedEmail && submittedIssue && (
//         <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md">
//           <h2 className="mb-6 text-2xl font-bold">✓ Request submitted!</h2>
//           <p>Name: {submittedFullName}</p>
//           <p>Email: {submittedEmail}</p>
//           <p>Issue: {submittedIssue}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [email, setEmail] = useState("");
//   const [submittedEmail, setSubmittedEmail] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     setSubmittedEmail(email);
//     setEmail("");
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 flex items-center justify-center">
//       <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md">
//         <h1 className="mb-6 text-2xl font-bold">Join Our Newsletter</h1>

//         <form onSubmit={handleSubmit}>
//           <label className="mb-2 block text-sm font-medium">
//             Email Address
//           </label>

//           <input
//             type="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             placeholder="Enter email address"
//             className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
//           />

//           <button
//             type="submit"
//             className="mt-4 mb-4 w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
//           >
//             Submit
//           </button>
//         </form>

//         {submittedEmail && (
//           <p className="rounded-lg bg-green-50 p-3 text-green-700">
//             ✓ Subscribed successfully!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [username, setUsername] = useState("");
//   const [submittedUsername, setSubmittedUsername] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     setSubmittedUsername(username);
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 flex items-center justify-center">
//       <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md">
//         <h1 className="mb-6 text-2xl font-bold">Login Form</h1>

//         <form onSubmit={handleSubmit}>
//           <label className="mb-2 block text-sm font-medium">Username</label>

//           <input
//             type="text"
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//             placeholder="Enter username"
//             className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
//           />

//           <button
//             type="submit"
//             className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
//           >
//             Submit
//           </button>
//         </form>

//         {submittedUsername && (
//           <p className="mt-4 rounded-lg bg-green-50 p-3 text-green-700">
//             Welcome, {submittedUsername}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const products = [
//     {
//       id: 101,
//       name: "Laptop",
//       price: 70000,
//       inStock: true,
//     },
//     {
//       id: 102,
//       name: "Mouse",
//       price: 1500,
//       inStock: true,
//     },
//     {
//       id: 103,
//       name: "Keyboard",
//       price: 2000,
//       inStock: true,
//     },
//     {
//       id: 104,
//       name: "Monitor",
//       price: 15000,
//       inStock: false,
//     },
//   ];

//   const inStockProducts = products.filter((product) => product.inStock);

//   return (
//     <div>
//       <h1>Product Catalog</h1>

//       {inStockProducts.length > 0 ? (
//         inStockProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             name={product.name}
//             price={product.price}
//             inStock={product.inStock}
//           />
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// }

// export default App;

// function App() {
//   const products = [
//     {
//       id: 101,
//       name: "Laptop",
//       price: 70000,
//       inStock: true,
//     },
//     {
//       id: 102,
//       name: "Mouse",
//       price: 1500,
//       inStock: false,
//     },
//     {
//       id: 103,
//       name: "Keyboard",
//       price: 2000,
//       inStock: true,
//     },
//     {
//       id: 104,
//       name: "Monitor",
//       price: 15000,
//       inStock: false,
//     },
//   ];

//   return (
//     <div>
//       {products
//         .filter((product) => product.inStock)
//         .map((product) => (
//           <ProductCard
//             key={product.id}
//             name={product.name}
//             price={product.price}
//           />
//         ))}
//     </div>
//   );
// }

// function App() {
//   const products = [
//     {
//       id: 101,
//       name: "Laptop",
//       price: 70000,
//     },
//     {
//       id: 102,
//       name: "Mouse",
//       price: 1500,
//     },
//     {
//       id: 103,
//       name: "Keyboard",
//       price: 2000,
//     },
//   ];

//   return (
//     <div>
//       {products.map((product) => {
//         return (
//           <ProductCard
//             key={product.id}
//             name={product.name}
//             price={product.price}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [stock, setStock] = useState(5);

//   function stockIncrement() {
//     setStock(stock + 1);
//   }
//   function stockDecrement() {
//     if (stock > 0) {
//       setStock(stock - 1);
//     }
//   }

//   return (
//     <div>
//       <h1>Stock: {stock}</h1>
//       <button onClick={stockDecrement}>-</button>
//       <button onClick={stockIncrement}>+</button>
//       <p>{stock > 0 ? "In Stock" : "Out of Stock"}</p>
//     </div>
//   );
// }

// export default App;

//   const product = {
//     name: "Headphones",
//     stock: 3,
//   };

//   return (
//     <div>
//       <h1>{product.name}</h1>

//       <p>{product.stock > 0 ? "Available" : "Out of Stock"}</p>
//     </div>
//   );
// }

// function App() {
//   const isAdmin = true;

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       {isAdmin && <button>Delete User</button>}
//     </div>
//   );
// }

// export default App;

// function App() {
//   const isLoggedIn = true;

//   return (
//     <div>{isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please login</h2>}</div>
//   );
// }

// function App() {
//   const isLoggedIn = true;

//   let message;

//   if (isLoggedIn) {
//     message = <h2>Welcome back!</h2>;
//   } else {
//     message = <h2>Please login</h2>;
//   }

//   return <div>{message}</div>;
// }

//export default App;

// function App() {
//   const [count, setCount] = useState(1);

//   function countIncrement() {
//     setCount(count + 1);
//   }

//   function countDecrement() {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   }

//   return (
//     <div>
//       <h1>Counter</h1>

//       <p>Count: {count}</p>

//       <button onClick={countDecrement}>-</button>

//       <button onClick={countIncrement}>+</button>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [count, setCount] = useState(0);

//   function handleIncrement() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Counter</h1>

//       <p>Count: {count}</p>

//       <button onClick={handleIncrement}>+</button>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <>
//       <EmployeeCard name="Alex" role="Frontend Developer" experience={5} />
//       {/* <Header />
//       <About /> */}
//       {/* <ProductCard name="Laptop" price={70000} />
//       <ProductCard name="Mouse" price={1500} />
//       <ProductCard name="Keyboard" price={2000} />
//       <ProductCard name="Monitor" price={15000} />
//       <EmployeeCard name="Alex" role="Frontend Developer" experience={5} />
//       <EmployeeCard name="Sarah" role="UI Designer" experience={4} /> */}
//     </>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";

// const mockProducts = {
//   smartphones: [
//     { id: 1, name: "Phone A" },
//     { id: 2, name: "Phone B" },
//   ],

//   laptops: [
//     { id: 3, name: "Laptop A" },
//     { id: 4, name: "Laptop B" },
//   ],

//   all: [
//     { id: 1, name: "Phone A" },
//     { id: 2, name: "Phone B" },
//     { id: 3, name: "Laptop A" },
//     { id: 4, name: "Laptop B" },
//   ],
// };

// function fakeFetchProducts(category) {
//   const delays = {
//     all: 800,
//     smartphones: 2500,
//     laptops: 500,
//   };

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mockProducts[category]);
//     }, delays[category]);
//   });
// }

// function App() {
//   const [category, setCategory] = useState("all");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     let ignore = false;

//     setLoading(true);

//     fakeFetchProducts(category).then((data) => {
//       if (ignore) {
//         return;
//       }

//       setProducts(data);
//       setLoading(false);
//     });

//     return () => {
//       ignore = true;
//     };
//   }, [category]);

//   return (
//     <div className="min-h-screen bg-slate-100 px-4 py-10">
//       <div className="mx-auto max-w-xl">
//         <h1 className="text-3xl font-bold text-slate-900">Product Explorer</h1>

//         <p className="mt-2 text-slate-600">
//           Current category:
//           <span className="ml-1 font-semibold text-indigo-600">{category}</span>
//         </p>

//         <div className="mt-6 flex gap-3">
//           <button
//             type="button"
//             onClick={() => setCategory("smartphones")}
//             className="rounded-lg bg-indigo-600 px-4 py-2 text-white"
//           >
//             Smartphones
//           </button>

//           <button
//             type="button"
//             onClick={() => setCategory("laptops")}
//             className="rounded-lg bg-slate-800 px-4 py-2 text-white"
//           >
//             Laptops
//           </button>
//         </div>

//         <div className="mt-8 rounded-2xl bg-white p-6 shadow">
//           {loading ? (
//             <p className="text-slate-500">Loading...</p>
//           ) : (
//             <div className="space-y-3">
//               {products.map((product) => (
//                 <div
//                   key={product.id}
//                   className="rounded-lg border border-slate-200 p-4"
//                 >
//                   {product.name}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";

// const categories = [
//   {
//     value: "all",
//     label: "All Products",
//   },
//   {
//     value: "smartphones",
//     label: "Smartphones",
//   },
//   {
//     value: "laptops",
//     label: "Laptops",
//   },
//   {
//     value: "fragrances",
//     label: "Fragrances",
//   },
//   {
//     value: "beauty",
//     label: "Beauty",
//   },
//   {
//     value: "groceries",
//     label: "Groceries",
//   },
// ];

// function App() {
//   const [category, setCategory] = useState("all");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         setLoading(true);
//         setError("");
//         setProducts([]);

//         const url =
//           category === "all"
//             ? "https://dummyjson.com/products?limit=12"
//             : `https://dummyjson.com/products/category/${category}`;

//         const response = await fetch(url);

//         if (!response.ok) {
//           throw new Error(`Request failed: ${response.status}`);
//         }

//         const data = await response.json();

//         setProducts(data.products);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProducts();
//   }, [category]);

//   return (
//     <div className="min-h-screen bg-slate-100 px-4 py-10">
//       <div className="mx-auto max-w-6xl">
//         <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-slate-900">
//               Product Explorer
//             </h1>

//             <p className="mt-2 text-slate-600">
//               Select a category to load matching products.
//             </p>
//           </div>

//           <div>
//             <label
//               htmlFor="category"
//               className="mb-2 block text-sm font-medium text-slate-700"
//             >
//               Category
//             </label>

//             <select
//               id="category"
//               value={category}
//               onChange={(event) => setCategory(event.target.value)}
//               className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-indigo-500"
//             >
//               {categories.map((item) => (
//                 <option key={item.value} value={item.value}>
//                   {item.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {loading && (
//           <div className="mt-8 rounded-xl bg-white p-6 text-slate-600 shadow-sm">
//             Loading products...
//           </div>
//         )}

//         {!loading && error && (
//           <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && products.length === 0 && (
//           <div className="mt-8 rounded-xl bg-white p-6 text-slate-600 shadow-sm">
//             No products found.
//           </div>
//         )}

//         {!loading && !error && products.length > 0 && (
//           <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {products.map((product) => (
//               <article
//                 key={product.id}
//                 className="overflow-hidden rounded-2xl bg-white shadow-sm"
//               >
//                 <img
//                   src={product.thumbnail}
//                   alt={product.title}
//                   className="h-60 w-auto object-cover m-auto"
//                 />

//                 <div className="p-5">
//                   <h2 className="font-semibold text-slate-900">
//                     {product.title}
//                   </h2>

//                   <p className="mt-2 text-lg font-bold text-indigo-600">
//                     ${product.price}
//                   </p>

//                   <p className="mt-2 text-sm text-slate-500">
//                     {product.category}
//                   </p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import useFetchProducts from "./hooks/useFetchProducts";

// function App() {
//   const { products, loading, error } = useFetchProducts();

//   return (
//     <div className="min-h-screen bg-slate-100 px-4 py-10">
//       <div className="mx-auto max-w-5xl">
//         <h1 className="text-3xl font-bold text-slate-900">Product Explorer</h1>

//         <p className="mt-2 text-slate-600">
//           Products loaded from an external API.
//         </p>

//         {loading && <p className="mt-8 text-slate-600">Loading products...</p>}

//         {!loading && error && (
//           <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && products.length === 0 && (
//           <p className="mt-8 text-slate-600">No products found.</p>
//         )}

//         {!loading && !error && products.length > 0 && (
//           <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {products.map((product) => (
//               <article
//                 key={product.id}
//                 className="rounded-2xl bg-white p-5 shadow-sm"
//               >
//                 <img
//                   src={product.thumbnail}
//                   alt={product.title}
//                   className="h-48 w-full rounded-xl object-cover"
//                 />

//                 <h2 className="mt-4 font-semibold text-slate-900">
//                   {product.title}
//                 </h2>

//                 <p className="mt-2 text-lg font-bold text-indigo-600">
//                   ${product.price}
//                 </p>

//                 <p className="mt-2 text-sm text-slate-500">
//                   Category: {product.category}
//                 </p>
//               </article>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";

// function App() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     function handleScroll() {
//       setScrollY(window.scrollY);
//     }

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="min-h-[200vh] bg-slate-100">
//       <div className="sticky top-0 border-b border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur">
//         <p className="text-sm text-slate-500">Current Scroll Position</p>

//         <h1 className="mt-1 text-4xl font-bold text-slate-900">{scrollY}px</h1>
//       </div>

//       <div className="mx-auto max-w-2xl px-6 py-20">
//         <h2 className="text-3xl font-bold text-slate-900">Scroll the page</h2>

//         <p className="mt-4 text-slate-600">
//           The number at the top updates whenever the browser window scrolls.
//         </p>

//         <div className="mt-20 space-y-8">
//           {Array.from({ length: 12 }, (_, index) => (
//             <div key={index} className={`rounded-2xl bg-white p-8 shadow-sm`}>
//               <h3 className={`text-xl font-semibold text-slate-900`}>
//                 Section {index + 1}
//               </h3>

//               <p className="mt-2 text-slate-500">
//                 Keep scrolling to see the scroll position change at the top.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";

// function App() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setSeconds((prevSeconds) => prevSeconds + 1);
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-slate-100">
//       <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
//         <p className="text-sm font-medium text-slate-500">Session Time</p>

//         <h1 className="mt-2 text-5xl font-bold text-slate-900">{seconds}s</h1>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";

// // Fake external chat service
// function createChatConnection(roomId) {
//   let connected = false;

//   return {
//     connect() {
//       connected = true;
//       console.log(`✅ Connected to "${roomId}" room`);
//     },

//     disconnect() {
//       if (!connected) {
//         return;
//       }

//       connected = false;
//       console.log(`❌ Disconnected from "${roomId}" room`);
//     },
//   };
// }

// function App() {
//   const [roomId, setRoomId] = useState("General");

//   useEffect(() => {
//     const connection = createChatConnection(roomId);

//     connection.connect();

//     return () => {
//       connection.disconnect();
//     };
//   }, [roomId]);

//   return (
//     <div className="min-h-screen bg-slate-100 px-4 py-10">
//       <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow">
//         <h1 className="text-2xl font-bold text-slate-900">Chat Room</h1>

//         <p className="mt-2 text-slate-600">
//           Current room:
//           <span className="ml-1 font-semibold text-indigo-600">{roomId}</span>
//         </p>

//         <div className="mt-6 flex flex-wrap gap-3">
//           <button
//             type="button"
//             onClick={() => setRoomId("General")}
//             className="rounded-lg bg-slate-200 px-4 py-2 font-medium"
//           >
//             General
//           </button>

//           <button
//             type="button"
//             onClick={() => setRoomId("Travel")}
//             className="rounded-lg bg-slate-200 px-4 py-2 font-medium"
//           >
//             Travel
//           </button>

//           <button
//             type="button"
//             onClick={() => setRoomId("Sports")}
//             className="rounded-lg bg-slate-200 px-4 py-2 font-medium"
//           >
//             Sports
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `My App - ${count}`;
//   }, [count]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-slate-100">
//       <h1 className="text-3xl font-bold">Count: {count}</h1>

//       <button
//         onClick={() => setCount((prev) => prev + 1)}
//         className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
//       >
//         +1
//       </button>
//     </div>
//   );
// }

// export default App;
