import EditCar from "../edit.car";


export default function EditCarPage() {
  return (
    <section className="edit-section">
      <div className="edit-container">
        <h1 className="title-edit-page">Edit your car</h1>
        {<EditCar></EditCar>}
      </div>
    </section>
  );
}

