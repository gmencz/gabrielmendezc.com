import React from 'react'
import addToMailChimp from 'gatsby-plugin-mailchimp'

const Footer: React.FC = () => {
  const [subscribing, setSubscribing] = React.useState(false)
  const [successfulSubscription, setSuccessfulSubscription] = React.useState<
    boolean | null
  >(null)
  const [subscriberDetails, setSubscriberDetails] = React.useState({
    name: '',
    email: '',
  })

  const subscribeToMailchimpList = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    setSubscribing(true)
    const res = await addToMailChimp(subscriberDetails.email, {
      FNAME: subscriberDetails.name || 'Unknown',
    })
    setSubscribing(false)

    if (res.result === 'error') {
      // Display error...
      setSuccessfulSubscription(false)
      return
    }

    // Display success...
    setSuccessfulSubscription(true)
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
        padding: '0 0 35px',
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
          position: 'relative',
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
          {successfulSubscription ? 'Newsletter' : 'Join the Newsletter'}
        </h2>
        {successfulSubscription ? (
          <div css={{display: 'flex', alignItems: 'center'}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
            </svg>
            <p
              css={{
                color: 'hsla(255, 100%, 100%, 0.9)',
                margin: '2px 0 0 10px',
              }}
            >
              Subscribed!
            </p>
          </div>
        ) : (
          <>
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '20px',
              }}
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
                Email *
              </label>
              <input
                id="email"
                required
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
                ':disabled': {
                  pointerEvents: 'none',
                  opacity: 0.55,
                },
              }}
              disabled={subscribing || !subscriberDetails.email}
              type="submit"
            >
              {subscribing ? 'Subscribing...' : 'Subscribe'}
            </button>
          </>
        )}
      </form>
    </footer>
  )
}

export default Footer
