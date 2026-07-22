export default function Output({general, education, experience}) {
  return (<>
    <h2>Results</h2>
    {hasInfo(general) ? (<GeneralInfo general={general}></GeneralInfo>) : null}
    {hasInfo(education) ? (<EducationInfo education={education}></EducationInfo>) : null}
    {hasInfo(experience) ? (<ExperienceInfo experience={experience}></ExperienceInfo>) : null}
  </>)
}

function hasInfo(object) {
  for(const property in object) {
    if(object[property].length > 0) return true;
  }
  return false;
}

function GeneralInfo({general}) {
  return (<div>
    <h2>General Informations</h2>
    <p>Name: {general.name}</p>
    <p>E-mail: {general.email}</p>
    <p>Telephone number: {general.phone}</p>
    <hr></hr>
  </div>)
}

function EducationInfo({education}) {
  return (<div>
    <h2>Educational Experience</h2>
    <p>School name: {education.school}</p>
    <p>Title of study: {education.study}</p>
    <p>Date of study: {education.date}</p>
    <hr></hr>
  </div>)
}

function ExperienceInfo({experience}) {
  return (<div>
    <h2>Practical Experience</h2>
    <p>Company name: {experience.company}</p>
    <p>Position: {experience.position}</p>
    <p>Responsibilities:</p>
    <ResponsibilitiesList responsibilities={experience.responsibilities}></ResponsibilitiesList>
    <p>Working time: {experience.startingDate} - {experience.endingDate}</p>
    <hr></hr>
  </div>)
}

function ResponsibilitiesList({responsibilities}){
  return (<ol>
    {responsibilities.map((responsibility => {
      return <li key={responsibility}>{responsibility}</li>
    }))}
  </ol>)
}
