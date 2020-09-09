import React from 'react'
import addToMailChimp from 'gatsby-plugin-mailchimp'

const Footer: React.FC = () => {
  const [subscriberDetails, setSubscriberDetails] = React.useState({
    name: '',
    email: '',
  })

  const subscribeToMailchimpList = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()
    console.log(subscriberDetails)

    const res = await addToMailChimp(subscriberDetails.email, {
      FNAME: subscriberDetails.name || 'Unknown',
    })

    if (res.result === 'error') {
      // Display error...
      return
    }

    // Display success...
    console.log(res)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Destructure target's name and value so we don't have to access event.target directly
    // inside the state updater function since it would cause issues due to state updates
    // being asynchronous and the event properties being nullified after this function has
    // been invoked.
    const {name, value} = event.target

    setSubscriberDetails(prevSubscriberDetails => ({
      ...prevSubscriberDetails,
      [name]: value,
    }))
  }

  return (
    <footer
      css={{
        maxWidth: 620,
        width: '100%',
        margin: 'auto auto 0',
        padding: '0 0 48px',
      }}
    >
      <form
        onSubmit={subscribeToMailchimpList}
        css={{
          maxWidth: 300,
          backgroundColor: '#1ca086',
          padding: '40px 30px',
          color: '#ffffff',
          borderRadius: 4,
        }}
      >
        <h2
          css={{
            marginTop: 0,
            fontSize: 24,
            marginBottom: 30,
            color: 'hsla(255,100%,100%,0.9)',
          }}
        >
          Join the Newsletter
        </h2>
        <div
          css={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}
        >
          <label
            css={{
              marginBottom: '5px',
              fontSize: '0.9rem',
              color: 'hsla(255,100%,100%,0.9)',
            }}
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Jane"
            onChange={handleInputChange}
            css={{
              borderRadius: 4,
              border: '1px solid rgb(211, 211, 211)',
              fontFamily: 'Quattrocento Sans, sans-serif',
              padding: '5px 10px',
              fontSize: '0.9rem',
            }}
            type="text"
          />
        </div>
        <div css={{display: 'flex', flexDirection: 'column'}}>
          <label
            css={{
              marginBottom: '5px',
              fontSize: '0.9rem',
              color: 'hsla(255,100%,100%,0.9)',
            }}
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            onChange={handleInputChange}
            css={{
              borderRadius: 4,
              border: '1px solid rgb(211, 211, 211)',
              fontFamily: 'Quattrocento Sans, sans-serif',
              padding: '5px 10px',
              fontSize: '0.9rem',
            }}
            type="email"
          />
        </div>
        <button
          css={{
            marginTop: '30px',
            borderRadius: 4,
            border: 0,
            fontSize: '0.95rem',
            padding: '5px 10px',
            cursor: 'pointer',
            color: 'hsla(255,100%,100%,0.9)',
            backgroundColor: 'hsla(0,0%,0%,0.9)',
          }}
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </footer>
  )
}

export default Footer
