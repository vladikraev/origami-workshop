import React, { useState } from 'react'
import styled from 'styled-components'
import Title from '../../components/title'
import PageLayout from '../../components/page-layout'
import SubmitButton from '../../components/button/submit-button'
import Origamis from '../../components/origamis'
import getCookie from '../../utils/cookie'

const ShareThoughtsPage = () => {
  const [publication, setPublication] = useState('')
  const [updatedOrigami, setUpdatedOrigami] = useState([])

  const handleSubmit = async () => {
    await fetch('http://localhost:9999/api/origami', {
      method: 'POST',
      data: {
        body: JSON.stringify({
          description: publication
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getCookie('x-auth-token')
        }
      }
    })

    setPublication('')
    setUpdatedOrigami([...updatedOrigami, 1])
  }

  return (
    <PageLayout>
      <Title title="Share your thoughts..." />
      <Container>
        <div>
          <TextArea value={publication} onChange={e => setPublication(e.target.value)} />
        </div>
        <div>
          <SubmitButton title="Post" onClick={handleSubmit} />
          <RedSubmitButton title='Post1'></RedSubmitButton>
        </div>
      </Container>
      <Origamis length={3} updatedOrigami={updatedOrigami} />
    </PageLayout>
  )
}

const Container = styled.div`
  text-align: center;
`

const TextArea = styled.textarea`
  width: 44%;
  display: block;
  margin: 0 auto;
  resize: none;
  padding: 1%;
  height: 10vh;
  font-style: italic;
  border-radius: 6px;
  border: 2px solid #234465;
  color: #234465;
`
const RedSubmitButton = styled(SubmitButton)`
  && {
    background-color: red;
  } 
`;

export default ShareThoughtsPage