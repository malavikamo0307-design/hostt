type Doctor = {
  id: number;
  name: string;
  department: string;
};

type Props = {
  doctor: Doctor;
};

export default function DoctorCard({ doctor }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h3>{doctor.name}</h3>
      <p>{doctor.department}</p>
      <button>View Queue</button>
    </div>
  );
}
