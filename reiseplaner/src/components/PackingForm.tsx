import { useState } from "react";

export function PackingForm(props: any) {
  const [gender, setGender] = useState("");
  const [weather, setWeather] = useState("");
  const [duration, setDuration] = useState(0);
  const [activity, setActivity] = useState("");
  const [transport, setTransport] = useState("");


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formData = {
      gender,
      weather,
      duration,
      activity,
      transport,
    };

    props.onSubmit(formData);
  }
  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Female">Weiblich</option>
            <option value="Male">Männlich</option>
          </select>
        </label>
        <br />
        <label>
          Wetter:
          <select value={weather} onChange={(e) => setWeather(e.target.value)}>
            <option value="Winter">Winter</option>
            <option value="Spring">Frühling</option>
            <option value="Summer">Sommer</option>
            <option value="Autumn">Herbst</option>
          </select>
        </label>

        <br />
        <label>
          Dauer (Tage):
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </label>

        <br />
        <label>
          Aktivität:
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="beach">Strand</option>
            <option value="sport">Sport</option>
            <option value="camping">Camping</option>
            <option value="City">Städtereise</option>
          </select>
        </label>

        <br />

        <label>
          Transport:
          <select
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
          >
            <option value="flight">Flug</option>
            <option value="car">Auto</option>
            <option value="train">zug</option>
          </select>
        </label>

        <br />
        <button type="submit">Liste erstellen</button>
      </form>
    </div>
  );
}
