function sendMail(contactForm) {
  emailjs
    .send(
      "service_qzi9pmk",
      "template_nyp3u66",
      {
        from_name: contactForm.name.value,
        from_email: contactForm.emailaddress.value,
        project_request: contactForm.projectsummary.value,
      },
      "doDBqhvhcnvRFtRZW"
    )
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
  return false;
}
