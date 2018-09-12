import Notifications from 'react-notification-system-redux'
import uuidv1 from 'uuid/v1'

const getNotification = type => ({ title, message }) => Notifications[type]({
  position: 'bl',
  title,
  message: message || '',
  uid: uuidv1()
})

const createSuccessNotification = title => getNotification('success')({ title })
const createErrorNotification = title => getNotification('error')({ title })

export default {
  unknownError: createErrorNotification('An error occured'),
  fetchAchievementsError: createErrorNotification('Impossible to fetch achievements'),
  fetchTransactionsError: createErrorNotification('Impossible to fetch transactions'),
  facebookLoginSuccess: createSuccessNotification('Facebook login success'),
  walletRestored: createSuccessNotification('Wallet restored'),
  walletRecoverError: createErrorNotification('Impossible to recover wallet'),
  walletRefreshError: createErrorNotification('Impossible to refresh wallet'),
  walletGenerated: createSuccessNotification('Diadem Network QTUM wallet generated'),
  walletError: createErrorNotification('An error occured with Diadem Wallet'),
  createAchievementSuccess: createSuccessNotification('Achievement created. It will appear once confirmed on blockchain'),
  createAchievementError: createErrorNotification('Impossible to create achievement'),
  updateAchievementSuccess: createSuccessNotification('Achievement updated. It will appear once confirmed on blockchain'),
  updateAchievementError: createErrorNotification('Impossible to update achievement'),
  confirmAchievementSuccess: createSuccessNotification('Achievement confirmed. It will appear once confirmed on blockchain'),
  confirmAchievementError: createErrorNotification('Impossible to confirm achievement'),
  supportAchievementSuccess: createSuccessNotification('Achievement supported. It will appear once confirmed on blockchain'),
  supportAchievementError: createErrorNotification('Impossible to support achievement'),
  depositAchievementSuccess: createSuccessNotification('Deposit for achievement successful. It will appear once confirmed on blockchain'),
  depositAchievementError: createErrorNotification('Impossible to deposit for achievement'),
  newAchievements: createSuccessNotification('New achievements'),
  newTransactions: createSuccessNotification('New activity on Diadem Network'),
  incomingTokens: createSuccessNotification('Incoming tokens'),
  newAvailableTokens: createSuccessNotification('New tokens are now available'),
  pendingUserRegistration: createSuccessNotification('Please wait, your registration is in process. You will be notified when confirmed on blockchain'),
  userRegistrationSuccess: createSuccessNotification('Registration successful'),
  withdrawTokensSuccess: createSuccessNotification('Tokens withdrawal successful'),
  withdrawTokensError: createErrorNotification('Impossible to withdraw tokens')
}