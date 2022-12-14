import { writable } from "svelte/store";

const meetups = writable([{
    id: 'm1',
    title: 'Coding bootcamp',
    subtitle: 'Learn to code in 2 hours',
    description: 'In this meeting, we will have some experts that teach you how to code!',
    imageUrl: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    address: '27th Nerd Road, 25634 New York',
    contactEmail: 'code@test.com',
    isFavorite: true
},
{
    id: 'm2',
    title: 'Swim Together',
    subtitle: 'Let\'s go for some swimming',
    description: 'We will simply swim some rounds!',
    imageUrl: 'https://www.istockphoto.com/photo/five-swimmers-jumping-together-into-water-underwater-view-gm177281231-19580986?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fswimming-pools&utm_term=swimming%20pools%3A%3A%3A',
    address: '27th Nerd Road, 25634 New York',
    contactEmail: 'swim@test.com',
    isFavorite: false
}]);

const customMeetupsStore = {
    subscribe: meetups.subscribe,
    addMeetup: (meetupdata) => {
        const newMeetup = {
            ...meetupdata,
            id: (Math.random() * 10000).toString(),
            isFavorite: false
        }

        meetups.update(items => {
            return [newMeetup, ...items]
        })
    },
    toggleFavorite: (id) => {
        return meetups.update(items => {
            return items.map(item => {
                if (item.id === id) {
                    return { ...item, isFavorite: !item.isFavorite }
                }

                return item;
            })
        })
    }
}

export default customMeetupsStore;