import { ReactNode, useCallback, useEffect, useState } from 'react'
import {
  LinkAContainer,
  LinkContainer,
  ProfileCardContainer,
  ProfileCardDetails,
} from './styles'
import { api } from '../../../../lib/axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { Info } from '../Info'

interface ProfileDataProps {
  login: string
  name: string
  bio: string
  company?: string
  followers: number
  avatar_url: string
  html_url: string
  text: ReactNode
  link: string
  icon: ReactNode
}

export function CardProfile() {
  const [profileData, setProfileData] = useState<ProfileDataProps>(
    {} as ProfileDataProps,
  )

  const fetchProfile = useCallback(async () => {
    const response = await api.get('users/aiemao')

    setProfileData(response.data)
  }, [])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  return (
    <ProfileCardContainer>
      <img src={profileData.avatar_url} alt="Imagem Perfil" />

      <ProfileCardDetails>
        <header>
          <h2>{profileData.name}</h2>

          <LinkContainer>
            <LinkAContainer
              href={profileData.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {profileData.text}
              <span>
                <p>GITHUB</p>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </LinkAContainer>
          </LinkContainer>
        </header>
        <p>{profileData.bio}</p>

        <div>
          <Info
            text={profileData.login}
            icon={<FontAwesomeIcon icon={faGithub} />}
          />
          <Info
            text={profileData.company}
            icon={<FontAwesomeIcon icon={faBuilding} />}
          />
          <Info
            text={profileData.followers + ' seguidores'}
            icon={<FontAwesomeIcon icon={faUserGroup} />}
          />
        </div>
      </ProfileCardDetails>
    </ProfileCardContainer>
  )
}
