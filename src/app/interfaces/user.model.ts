export interface GoogleUser {
    operationType: string
    credential: Credential
    additionalUserInfo: AdditionalUserInfo
    user: User
  }
  
  export interface Credential {
    idToken: string
    accessToken: string
    pendingToken: any
    providerId: string
    signInMethod: string
  }
  
  export interface AdditionalUserInfo {
    isNewUser: boolean
    providerId: string
    profile: Profile
  }
  
  export interface Profile {
    name: string
    granted_scopes: string
    id: string
    verified_email: boolean
    given_name: string
    locale: string
    family_name: string
    email: string
    picture: string
  }
  
  export interface User {
    uid: string
    email: string
    emailVerified: boolean
    displayName: string
    isAnonymous: boolean
    photoURL: string
    providerData: ProviderDaum[]
    stsTokenManager: StsTokenManager
    createdAt: string
    lastLoginAt: string
    apiKey: string
    appName: string
  }
  
  export interface ProviderDaum {
    providerId: string
    uid: string
    displayName: string
    email: string
    phoneNumber: any
    photoURL: string
  }
  
  export interface StsTokenManager {
    refreshToken: string
    accessToken: string
    expirationTime: number
  }