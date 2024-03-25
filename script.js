const firebaseConfig = {
    apiKey: "AIzaSyAbbPbqaJn2umZOZJ9TeYZHXXEvVBI0qeU",
    authDomain: "profile1-dde53.firebaseapp.com",
    databaseURL: "https://profile1-dde53-default-rtdb.firebaseio.com",
    projectId: "profile1-dde53",
    storageBucket: "profile1-dde53.appspot.com",
    messagingSenderId: "209945181",
    appId: "1:209945181:web:23086406ad7f07fe78c3b4",
    measurementId: "G-70RXFHZB01"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function fetchUserProfile(userId) {
    const userRef = firebase.database().ref(userId);
    userRef.get().then((snapshot) => {
        if (snapshot.exists()) {
            displayUserProfile(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

function displayUserProfile(user) {
    const userProfilesDiv = document.getElementById('userProfiles');
    const userProfileDiv = document.createElement('div');
    userProfileDiv.className = 'user-profile';
    userProfileDiv.innerHTML = `
        <img src="${user.image}" alt="User Image" style="width:100px; height:auto; border-radius:50%;">
        <h3>${user.name}</h3>`;
    userProfilesDiv.appendChild(userProfileDiv);
}

// Fetch and display profiles for two users
fetchUserProfile('6oMmtm4ZTsPFlm0G01HAygcBGhr1'); // Replace 'user1Id' with the actual user ID
fetchUserProfile('sqvr8mlPBads0jyfdzSPTdnRMsD2'); // Replace 'user2Id' with the actual user ID
