export function Profile() {
  return (
    <section className="section profile shell" id="profile" aria-labelledby="profile-title">
      <div className="section__label">
        <span>01</span>
        <span>Profile</span>
      </div>
      <div className="profile__body">
        <p className="eyebrow eyebrow--dark">Across disciplines, one way of thinking</p>
        <h2 id="profile-title">
          From spatial systems to digital products, I design for the whole experience.
        </h2>
        <div className="profile__copy">
          <p>
            My background spans Landscape Architecture, Information, and Data Science. It taught me
            to see products as living systems: shaped by people, context, evidence, and the details
            that make an idea real.
          </p>
          <p>
            I connect user research and product definition with data analysis and implementation—so
            the reasoning behind a product survives all the way to what people use.
          </p>
        </div>
      </div>
    </section>
  );
}
