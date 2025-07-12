

function showWorkouts() {
    var workoutsSection = document.getElementById('workoutsSection');
    workoutsSection.style.display = 'block';
}

function selectWorkoutType() {
    var selectedType = document.getElementById('workoutType').value;

    // Redirect to the appropriate page based on the selected option
    if (selectedType === 'muscleTraining') {
        window.location.href = 'muscle_training.html'; // Replace with the actual page URL
    } else if (selectedType === 'cardio') {
        window.location.href = 'cardio.html'; // Replace with the actual page URL
    } else if (selectedType === 'aerobics') {
        window.location.href = 'aerobics.html'; // Replace with the actual page URL
    } else if (selectedType === 'homeWorkouts') {
        window.location.href = 'home_workouts.html'; // Replace with the actual page URL
    }
}
