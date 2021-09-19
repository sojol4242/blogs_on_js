const hasMeet = true;
const meet = new Promise((resolve, reject) => {
  // code
  if (!hasMeet) {
    const meetingDetails = {
      name: "Interview",
      medium: "Zoom",
      time: "10:10 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already done"));
  }
});

async function getMeeting() {
  try {
    const meetingDetails = await meet;
    console.log(
      `${meetingDetails.name} will be started on ${meetingDetails.time} via ${meetingDetails.medium}`
    );
  } catch (error) {
    console.error("Error: ", error.message);
  }
}

getMeeting();
