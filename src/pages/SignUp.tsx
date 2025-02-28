import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, Button, Form, TextInput, Select, Text } from 'grommet'
import { Link } from 'react-router-dom'

const StyledInput = styled(TextInput)`
  margin-bottom: 16px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: center;
`

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [marketing, setMarketing] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Form onSubmit={() => console.log({ name, email, phone, password, marketing })}>
      <Box
        direction='row'
        justify='between'
        margin={{ bottom: '16px' }}
      >
        <Text
          size='xxlarge'
          weight='bold'
        >
          Sign Up
        </Text>
        <StyledLink to='/'> 
          <Text
            size='small'
            color='accent-4'
          >
            Login
          </Text>
        </StyledLink>
      </Box>
      <StyledInput
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
        size='small'
      />
      <StyledInput
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        size='small'
      />
      <StyledInput
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        size='small'
        type='password'
      />
      <StyledInput
        placeholder="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        size='small'
      />
      <Box
        margin={{ bottom: '16px' }}
        width='100%'
      >
        <Select
          placeholder='How did you hear about us?'
          options={['App Store', 'Internet', 'Word of Mouth']}
          value={marketing}
          onChange={({ option }) => setMarketing(option)}
          size='small'
        />
      </Box>
      <Button
        primary
        label='Sign Up'
        type='submit'
        margin={{ right: 'auto' }}
      />
    </Form>
  )
}

export default SignUp