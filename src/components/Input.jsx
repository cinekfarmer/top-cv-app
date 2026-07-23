function testFunction(ominousParameter, setGeneral){
  setGeneral(prev => ({...prev, name:ominousParameter}));
}

export default function Input({general, setGeneral, education, setEducation, experience, setExperience}) {
  const newName = 'Welcome the new brave world!'

  return (<div>
    <GeneralInfoForm general={general} setGeneral={setGeneral}></GeneralInfoForm>
    <EdeucationInfoForm education={education} setEducation={setEducation}></EdeucationInfoForm>
    <ExperienceInfoForm experience={experience} setExperience={setExperience}></ExperienceInfoForm>
  </div>)
}

function GeneralInfoForm({general, setGeneral}) {
  return (<form>
    <fieldset>
      <legend>General Informations</legend>

      <label for="name">Name: </label>
      <input type="text" name="name" id="name" defaultValue={general.name}></input>
      <label for="email">E-mail: </label>
      <input type="email" name="email" id="email" defaultValue={general.email}></input>
      <label for="tel">Telephone number: </label>
      <input type="tel" name="tel" id="tel" defaultValue={general.phone}></input>
      <button type="submit">Save</button>
    </fieldset>
  </form>)
}

function EdeucationInfoForm({education, setEducation}) {
  return (<form>
    <fieldset>
      <legend>Educational Experience</legend>

      <label for="school">School name: </label>
      <input type="text" name="school" id="school" defaultValue={education.school}></input>
      <label for="study">Title of study: </label>
      <input type="text" name="study" id="study" defaultValue={education.study}></input>
      <label for="date">Date of study: </label>
      <input type="date" name="date" id="date" defaultValue={education.date}></input>
      <button type="submit">Save</button>
    </fieldset>
  </form>)
}

function ExperienceInfoForm({experience, setExperience}) {
  return (<form>
    <fieldset>
      <legend>Practical Experience</legend>

      <label for="company">Company name: </label>
      <input type="text" name="companu" id="company" defaultValue={experience.company}></input>
      <label for="position">Position: </label>
      <input type="text" name="position" id="position" defaultValue={experience.position}></input>
      <label for="responsibilities">Responsibilities: </label>
      {/*add dynamic generator*/}
      <label for="start"></label>
      <input type="date" name="start" id="start" defaultValue={experience.startingDate}></input>
      <label for="end"></label>
      <input type="date" name="end" id="end" defaultValue={experience.endingDate}></input>
      <button type="submit">Save</button>
    </fieldset>
  </form>)
}
