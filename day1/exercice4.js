const data = [
	  {
		      id: 'a1',
		      firstName: 'Guillermo',
		      lastName: 'Paredes',
		      age: 30,
		      skills: ['JavaScript', 'TypeScript', 'React', 'ReactNative', 'Angular'],
		      hobbies: ['Eat', 'Play Basketball'],
		      gender: 'Male'
		    },
	  {
		      id: 'a2',
		      firstName: 'Viviana',
		      lastName: 'Fernandez',
		      age: 25,
		      skills: ['Angular', 'Css3', 'Sass', 'Html5', 'JavaScript'],
		      hobbies: ['Eat', 'Play Basketball'],
		      gender: 'Female'
		    },
	  {
		      id: 'a3',
		      firstName: 'Adrian',
		      lastName: 'Zelada',
		      age: 35,
		      skills: ['JavaScript', 'TypeScript', 'Angular', 'Node', 'Architecture'],
		      hobbies: ['Eat', 'Play Basketball'],
		      gender: 'Male'
		    },
]


const stringSearch = 'React'

const response = data.filter(item => {
	    return item.skills.indexOf(stringSearch) >= 0 && item;
})

console.log('response', response);
