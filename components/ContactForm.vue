<template>
  <form class="contact">
    <div class="top">
      <div class="field">
        <label>Email</label>
        <input :value="sender.email" type="email" placeholder="jean.baptiste@dupont.com" @input="sender.email = $event.target.value">
      </div>
    </div>
    <div class="middle">
      <div class="field">
        <label>Fullname</label>
        <input :value="sender.name" type="text" placeholder="Jean-Baptiste Dupont" @input="sender.name = $event.target.value">
      </div>
      <div class="field">
        <label>Subject</label>
        <input :value="subject" type="text" placeholder="I saw your website" @input="subject = $event.target.value">
      </div>
    </div>
    <div class="textarea">
      <textarea :value="content" placeholder="I saw your website today..." @input="content = $event.target.value" />
    </div>
    <div class="actions">
      <button type="button" @click="sendMail()">
        Send&nbsp;<i class="fas fa-paper-plane" />
      </button>
    </div>
  </form>
</template>

<script>

export default {
  name: 'ContactForm',
  data () {
    return {
      sender: {
        name: '',
        email: ''
      },
      subject: '',
      content: ''
    }
  },
  methods: {
    async sendMail () {
      const url = 'http://localhost:8000' + '/contact'
      const body = {
        sender: {
          name: this.sender.name,
          email: this.sender.email
        },
        subject: this.subject,
        content: this.content
      }

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
      const response = await fetch(url, options).then(res => res.json())
      if (response.code === 200) {
        alert('Message sent !')
      } else {
        alert('Error occurred while sending message !')
      }
    }
  }
}
</script>
