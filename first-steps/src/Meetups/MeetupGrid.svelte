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
    <MeetupItem title={meetup.title} subtitle={meetup.subtitle} imageUrl={meetup.imageUrl} description={meetup.description} address={meetup.address} email={meetup.contactEmail} />
  {/each}
</section>