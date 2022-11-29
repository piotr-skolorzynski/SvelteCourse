<script>
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import Button from "./UI/Button.svelte";
  import Header from "./UI/Header.svelte";
  import meetups from './Meetups/meetups-store';

  let editMode = null;

  const addMeetup = (event) => {
    const meetupData = {
        title: event.detail.title,
        subtitle: event.detail.subtitle,
        address: event.detail.address,
        contactEmail: event.detail.email,
        description: event.detail.description,
        imageUrl: event.detail.imageUrl,
        isFavorite: event.detail.isFavorite
    }

    meetups.addMeetup(meetupData)
    editMode = null;
}

const toggleFavorite = (event) => {
  const id = event.detail;
  meetups.toggleFavorite(id);
}

  const cancelEdit = () => {
    editMode = null;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;

  }
</style>

<Header />

<main>
  <div class="meetup-controls">
    
  </div>
  <Button on:click={() => editMode = 'add'}>New Meetup</Button> 
  {#if editMode === 'add'}
    <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
  {/if}
  <MeetupGrid meetups={$meetups} on:toggleFavorite={toggleFavorite} />
</main>
