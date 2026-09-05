function Student({ name, course, college }) {
  return (
    <article className="student">
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>College: {college}</p>
    </article>
  )
}

export default Student
