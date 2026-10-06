function EmployeeCard({ name, role, experience }) {
  return (
    <div>
      <h2>Employee: {name}</h2>
      <p>Role: {role}</p>
      <p>Experience: {experience} Years</p>
    </div>
  );
}

export default EmployeeCard;
