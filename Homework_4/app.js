const personCards = document.querySelectorAll('.personCard');

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('people.json');
        const data = await response.json();

        data.forEach((person, index) => {
            const personCard = personCards[index];
            const photoElement = personCard.querySelector('.photo');

            const fields = [
                'name', 'class', 'studentID', 'clubAffiliations', 'dateOfBirth',
                'academicAbility', 'intelligence', 'decisionMaking', 'physicalAbility',
                'cooperativeness', 'comments', 'notes'
            ];

            fields.forEach(field => {
                personCard.querySelector(`.${field}`).innerHTML = person[field];
            });

            photoElement.src = person.photo;
            photoElement.alt = person.name;
        });

    } catch (e) {
        console.log(e);
    }
});


// const updatePersonCard = (person, personCard) => {
//     const properties = ['name', 'class', 'studentID', 'clubAffiliations', 'dateOfBirth', 'academicAbility', 'intelligence', 'decisionMaking', 'physicalAbility', 'cooperativeness', 'comments', 'notes'];
//
//     properties.forEach(property => {
//         const element = personCard.querySelector(`.${property}`);
//         if (element) {
//             element.innerHTML = person[property];
//         }
//     });
//
//     const photoElement = personCard.querySelector('.photo');
//     if (photoElement) {
//         photoElement.src = person.photo;
//         photoElement.alt = person.name;
//     }
// };
//
// const personCard = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'people.json');
//     request.setRequestHeader('Content-type', 'application/json');
//     request.send();
//
//     request.onload = () => {
//         const data = JSON.parse(request.responseText);
//         const personCards = document.querySelectorAll('.personCard');
//
//         data.forEach((person, index) => {
//             const personCard = personCards[index];
//             if (personCard) {
//                 updatePersonCard(person, personCard);
//             }
//         });
//     };
// }
//
// personCard();

// const personCard = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'people.json');
//     request.setRequestHeader('Content-type', 'application/json');
//     request.send();
//
//     request.onload = () => {
//         const data = JSON.parse(request.response);
//
//         data.forEach((person, index) => {
//             const personCard = document.querySelectorAll('.personCard')[index];
//
//             personCard.querySelector('.name').innerHTML = person.name;
//             personCard.querySelector('.class').innerHTML = person.class;
//             personCard.querySelector('.studentID').innerHTML = person.studentID;
//             personCard.querySelector('.clubAffiliations').innerHTML = person.clubAffiliations;
//             personCard.querySelector('.dateOfBirth').innerHTML = person.dateOfBirth;
//             personCard.querySelector('.academicAbility').innerHTML = person.academicAbility;
//             personCard.querySelector('.intelligence').innerHTML = person.intelligence;
//             personCard.querySelector('.decisionMaking').innerHTML = person.decisionMaking;
//             personCard.querySelector('.physicalAbility').innerHTML = person.physicalAbility;
//             personCard.querySelector('.cooperativeness').innerHTML = person.cooperativeness;
//             personCard.querySelector('.comments').innerHTML = person.comments;
//             personCard.querySelector('.notes').innerHTML = person.notes;
//             personCard.querySelector('.photo').src = person.photo;
//             personCard.querySelector('.photo').alt = person.name;
//         });
//     };
// };
//
// personCard();