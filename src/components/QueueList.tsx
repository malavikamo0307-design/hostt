type Patient = {
  token: number;
  name: string;
};

type Props = {
  queue: Patient[];
};

export default function QueueList({ queue }: Props) {
  return (
    <div>
      <h3>Waiting List</h3>

      {queue.length === 0 && <p>No patients</p>}

      <ul>
        {queue.map((p) => (
          <li key={p.token}>
            Token #{p.token} – {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
