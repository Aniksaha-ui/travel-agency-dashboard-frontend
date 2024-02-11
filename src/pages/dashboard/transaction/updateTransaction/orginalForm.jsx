<Card style={{ marginLeft: "30px" }}>
<h3
  style={{
    color: "white",
    textAlign: "center",
    padding: "10px",
    background: "blue",
  }}
>
  Status Update form
</h3>
<hr />
<div className="formbold-form-wrapper">
  <form action="https://formbold.com/s/FORM_ID" method="POST">
    <div className="formbold-input-group">
      <label htmlFor="name" className="formbold-form-label">
        {" "}
        Name{" "}
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        className="formbold-form-input"
      />
    </div>

    <div className="formbold-input-group">
      <label htmlFor="email" className="formbold-form-label">
        {" "}
        Email{" "}
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="formbold-form-input"
      />
    </div>

    <div className="formbold-input-group">
      <label htmlFor="age" className="formbold-form-label">
        {" "}
        Age{" "}
      </label>
      <input
        type="text"
        name="age"
        id="age"
        placeholder="Enter your age"
        className="formbold-form-input"
      />
    </div>

    <div className="formbold-input-group">
      <label className="formbold-form-label">
        Which option best describes you?
      </label>

      <select
        className="formbold-form-select"
        name="occupation"
        id="occupation"
      >
        <option value="Student">Student</option>
        <option value="designer">UX/UI Designer</option>
        <option value="fullstack">Full Stack Developer</option>
        <option value="frontend">Front End Developer</option>
      </select>
    </div>

    <div className="formbold-input-radio-wrapper">
      <label htmlFor="ans" className="formbold-form-label">
        Would you recommend our site to a friend?
      </label>

      <div className="formbold-radio-flex">
        <div className="formbold-radio-group">
          <label className="formbold-radio-label">
            <input
              className="formbold-input-radio"
              type="radio"
              name="ans"
              id="ans_yes"
            />
            Yes
            <span className="formbold-radio-checkmark"></span>
          </label>
        </div>

        <div className="formbold-radio-group">
          <label className="formbold-radio-label">
            <input
              className="formbold-input-radio"
              type="radio"
              name="ans"
              id="ans_no"
            />
            No
            <span className="formbold-radio-checkmark"></span>
          </label>
        </div>

        <div className="formbold-radio-group">
          <label className="formbold-radio-label">
            <input
              className="formbold-input-radio"
              type="radio"
              name="ans"
              id="ans_maybe"
            />
            Maybe
            <span className="formbold-radio-checkmark"></span>
          </label>
        </div>
      </div>
    </div>

    <div className="formbold-input-radio-wrapper">
      <label className="formbold-form-label">
        Which languages & frameworks do you know?
      </label>

      <div className="formbold-radio-flex">
        <div className="formbold-radio-group">
          <label className="formbold-radio-label" htmlFor="lang_c">
            <input
              className="formbold-input-radio"
              type="checkbox"
              name="c"
              id="lang_c"
            />
            C<span className="formbold-radio-checkmark"></span>
          </label>
        </div>

        {/* Add other language checkboxes here */}
      </div>
    </div>

    <div>
      <label htmlFor="message" className="formbold-form-label">
        Any comments or suggestions
      </label>
      <textarea
        rows="6"
        name="message"
        id="message"
        placeholder="Type here..."
        className="formbold-form-input"
      ></textarea>
    </div>

    <button type="submit" className="formbold-btn">
      Submit
    </button>
  </form>
</div>
</Card>