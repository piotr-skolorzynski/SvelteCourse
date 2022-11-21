<script>
    import MeetupItem from "./MeetupItem.svelte";

    export let meetups
</script> 

<style>
    #meetups {
        margin-top: 5rem;
    }
</style>

<section id="meetups">
  {#each meetups as meetup }
    <MeetupItem 
    id={meetup.id}
    title={meetup.title} 
    subtitle={meetup.subtitle} 
    imageUrl={meetup.imageUrl} 
    description={meetup.description} 
    address={meetup.address} 
    email={meetup.contactEmail} 
    isFavorite={meetup.isFavorite}
    on:toggleFavorite
    />
  {/each}
</section>