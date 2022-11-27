 <script>
    import {createEventDispatcher} from 'svelte';
    import Button from "../UI/Button.svelte";
    import TextInput from "../UI/TextInput.svelte";
    import Modal from '../UI/Modal.svelte';
    import { isEmpty, isEmailValid } from '../helpers/validation';

  let title = '';
  let subtitle = '';
  let address = '';
  let email = '';
  let description = '';
  let imageUrl = '';

  let isFavorite = false;

  $:titleValid = !isEmpty(title);
  $:subtitleValid = !isEmpty(subtitle);
  $:addressValid = !isEmpty(address);
  $:emailValid = isEmailValid(email);
  $:descriptionValid = !isEmpty(description);
  $:imageUrlValid = !isEmpty(imageUrl);
  $:isFormValid = titleValid && subtitleValid && addressValid && emailValid && descriptionValid && imageUrlValid;

  const dispatch = createEventDispatcher();

  const submitForm = () => {
    dispatch('save', {
        title,
        subtitle,
        address,
        email,
        description,
        imageUrl,
        isFavorite
    });
  }

  const cancel = () => {
    dispatch('cancel');
  }

</script>

 <style>
    form {
        width: 100%;
    }
</style>
  
<Modal title="Edit Meetup Data" on:cancel>
  <form on:submit|preventDefault={submitForm}>

    <TextInput 
      id="title"
      label="Title" 
      valid={titleValid} 
      validityMessage="Please enter a valid title." 
      value={title} 
      on:input={event => (title = event.target.value)} 
    />

    <TextInput 
      id="subtitle" 
      label="Subtitle" 
      valid={subtitleValid} 
      validityMessage="Please enter a valid subtitle." 
      value={subtitle} 
      on:input={event => (subtitle = event.target.value)} 
    />

    <TextInput 
      id="address" 
      label="Address" 
      valid={addressValid}
      validityMessage="Please eneter a valid address."
      value={address} 
      on:input={event => (address = event.target.value)} 
    />

    <TextInput 
      id="imageUrl" 
      label="Image URL"
      valid={imageUrlValid}
      validityMessage="Please enter a valid Image Url." 
      value={imageUrl} 
      on:input={event => (imageUrl = event.target.value)} 
    />

    <TextInput 
      id="email" 
      label="E-Mail" 
      type="email" 
      valid={emailValid}
      validityMessage="Please enter a valid email address."
      value={email} 
      on:input={event => (email = event.target.value)} 
    />

    <TextInput 
      id="description" 
      label="Description" 
      controlType="textarea" 
      valid={descriptionValid}
      validityMessage="Please enter a description."
      bind:value={description} 
    />

    </form>

    <div slot="footer">
        <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
        <Button type="button" on:click={submitForm} disabled={!isFormValid}>Save</Button>
    </div>
</Modal>