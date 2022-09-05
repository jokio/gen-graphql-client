
import {
	ApolloClient,
	ErrorPolicy,
	FetchPolicy,
	MutationOptions,
	OperationVariables,
	QueryOptions,
	SubscriptionOptions,
	WatchQueryOptions,
} from '@apollo/client/core'
import { UpdateQueryFn } from '@apollo/client/core/watchQueryOptions'

// gql2 - to ignore apollo extention validation
// for now there is no better way
import gql2 from 'graphql-tag'

// DocumentNode type for fragment type safety
import { DocumentNode } from 'graphql'

// rx library
// import { from, observable } from 'rxjs'
// import { map } from 'rxjs/operators'



// tslint:disable

// types enum

export enum QueryObjectTypes {
	AvatarLayer = 'AvatarLayer',
	GiftPack = 'GiftPack',
	User = 'User',
	UserFeature = 'UserFeature',
	BlockedUser = 'BlockedUser',
	VIPSubscription = 'VIPSubscription',
	Player = 'Player',
	PlayerLevel = 'PlayerLevel',
	PlayerStars = 'PlayerStars',
	PlayerGameLog = 'PlayerGameLog',
	PlayerNotificationConfig = 'PlayerNotificationConfig',
	NotificationOptInItem = 'NotificationOptInItem',
	PlayerTicket = 'PlayerTicket',
	TournamentStats = 'TournamentStats',
	TournamentGroupStats = 'TournamentGroupStats',
	PlayerBadge = 'PlayerBadge',
	PairBan = 'PairBan',
	Room = 'Room',
	PairKickedUser = 'PairKickedUser',
	RoomConfirmation = 'RoomConfirmation',
	ActiveRoomInfo = 'ActiveRoomInfo',
	SpecialStatus = 'SpecialStatus',
	UserActiveDevice = 'UserActiveDevice',
	AvatarConfig = 'AvatarConfig',
	AvatarConfigAccessory = 'AvatarConfigAccessory',
	AvatarConfigTattoo = 'AvatarConfigTattoo',
	UserGiftBox = 'UserGiftBox',
	MusicChannel = 'MusicChannel',
	MusicStream = 'MusicStream',
	Song = 'Song',
	Confirmation = 'Confirmation',
	Tournament = 'Tournament',
	TournamentRound = 'TournamentRound',
	TournamentRoom = 'TournamentRoom',
	TournamentRoomUser = 'TournamentRoomUser',
	TournamentRoomUserStats = 'TournamentRoomUserStats',
	UserOnlineStatus = 'UserOnlineStatus',
	Game = 'Game',
	Banner = 'Banner',
	GameGiftBox = 'GameGiftBox',
	GameTheme = 'GameTheme',
	TournamentConfig = 'TournamentConfig',
	TournamentConfigRound = 'TournamentConfigRound',
	TournamentPlaceReward = 'TournamentPlaceReward',
	TournamentGroup = 'TournamentGroup',
	TournamentGroupUserRating = 'TournamentGroupUserRating',
	Game2 = 'Game2',
	TopPlayerItem = 'TopPlayerItem',
	PlayerRanks = 'PlayerRanks',
	TournamentGroupConfig = 'TournamentGroupConfig',
	ShopProduct = 'ShopProduct',
	ShopProductPromo = 'ShopProductPromo',
	StoreProduct = 'StoreProduct',
	JokerPlayerStats = 'JokerPlayerStats',
	ConversationMessage = 'ConversationMessage',
	ReferralData = 'ReferralData',
	RewardInfo = 'RewardInfo',
	RewardInfoProgress = 'RewardInfoProgress',
	Queue = 'Queue',
	GameConfig = 'GameConfig',
	RoomV3 = 'RoomV3',
	OpenedGiftBoxResult = 'OpenedGiftBoxResult',
	PostGameResult = 'PostGameResult',
	PostGamePlayer = 'PostGamePlayer',
	RoomMatchRequestResult = 'RoomMatchRequestResult',
	AuthResult = 'AuthResult',
	MusicChannelUpdate = 'MusicChannelUpdate',
	RoomConfirmationUpdate = 'RoomConfirmationUpdate',
	RoomConfirmationComplete = 'RoomConfirmationComplete',
	RoomChatMessage = 'RoomChatMessage',
	RoomUpdate = 'RoomUpdate',
	TournamentRewardPoints = 'TournamentRewardPoints',
	TournamentRewardTicket = 'TournamentRewardTicket',
	TournamentRewardCrown = 'TournamentRewardCrown',
	UserDevice = 'UserDevice',
}
	

// types
type Int = number
export type ID = string
type String = string
type Boolean = boolean
type JSON = any
type DateTime = Date
type Float = number
type JSONSchema = any
type Time = Date

export enum AvatarLayerType {
	SKIN = 'SKIN',
	EYES = 'EYES',
	MOUTH = 'MOUTH',
	HAIR = 'HAIR',
	FACIAL_HAIR = 'FACIAL_HAIR',
	EYEBROWS = 'EYEBROWS',
	CLOTHES = 'CLOTHES',
	ACCESSORIES = 'ACCESSORIES',
	TATTOO = 'TATTOO',
}

export enum AvatarLayerType2 {
	SKIN = 'SKIN',
	EYES = 'EYES',
	MOUTH = 'MOUTH',
	HAIR = 'HAIR',
	FACIAL_HAIR = 'FACIAL_HAIR',
	EYEBROWS = 'EYEBROWS',
	CLOTHES = 'CLOTHES',
	TATTOO = 'TATTOO',
	ACCESSORY = 'ACCESSORY',
	HAT = 'HAT',
	GLASSES = 'GLASSES',
	FACE_MASK = 'FACE_MASK',
	PET = 'PET',
	CORNER_ITEM = 'CORNER_ITEM',
	BUBBLE = 'BUBBLE',
	EARING = 'EARING',
}

export enum UserGender {
	MALE = 'MALE',
	FEMALE = 'FEMALE',
}

export enum UiTheme {
	DARK = 'DARK',
	LIGHT = 'LIGHT',
}

export enum UserStatus {
	GUEST = 'GUEST',
	NORMAL = 'NORMAL',
}

export enum VIPSubscriptionStore {
	APPSTORE = 'APPSTORE',
	PLAYSTORE = 'PLAYSTORE',
	JOKSTORE = 'JOKSTORE',
}

export enum DeckType {
	MODERN = 'MODERN',
	OLD_SCHOOL = 'OLD_SCHOOL',
}

export enum AvatarConfigAccessoryMode {
	NORMAL = 'NORMAL',
}

export enum ConfirmationMode {
	AUTO = 'AUTO',
	MANUAL = 'MANUAL',
}

export enum TournamentRoomStatus {
	PENDING = 'PENDING',
	STARTED = 'STARTED',
	FINISHED = 'FINISHED',
	CANCELED = 'CANCELED',
}

export enum TournamentStatus {
	STARTED = 'STARTED',
	FINISHED = 'FINISHED',
	TIMER = 'TIMER',
}

export enum UserOnlineStatusType {
	ONLINE = 'ONLINE',
	OFFLINE = 'OFFLINE',
	PLAYING = 'PLAYING',
	SPECTATING = 'SPECTATING',
}

export enum BannerType {
	CARD = 'CARD',
	IMAGE = 'IMAGE',
}

export enum BannerActionType {
	ALERT = 'ALERT',
	OPEN_WEB = 'OPEN_WEB',
	OPEN_APP_PAGE = 'OPEN_APP_PAGE',
}

export enum TournamentConfigStatus {
	DRAFT = 'DRAFT',
	PENDING = 'PENDING',
	APPROVED = 'APPROVED',
}

export enum TournamentConfigViewMode {
	FULL_WIDTH_IMAGE = 'FULL_WIDTH_IMAGE',
	LOGO_AND_INFO = 'LOGO_AND_INFO',
}

export enum TournamentConfigLogoDisplayMode {
	SQUARE = 'SQUARE',
	MEDIUM_ROUND = 'MEDIUM_ROUND',
	FULL_ROUND = 'FULL_ROUND',
}

export enum TopPlayerType {
	OVERALL = 'OVERALL',
	OVERALL_ALL_TIMES = 'OVERALL_ALL_TIMES',
	FAST_GROWING = 'FAST_GROWING',
	MOST_ACTIVE = 'MOST_ACTIVE',
	MOST_RESPECTED = 'MOST_RESPECTED',
}

export enum PlayForOptions {
	PRACTICE = 'PRACTICE',
	RATING = 'RATING',
	TOURNAMENT = 'TOURNAMENT',
}

export enum TournamentGroupConfigState {
	ACTIVE = 'ACTIVE',
	TIMER = 'TIMER',
}

export enum OpenedGiftBoxResultType {
	VIP_SERVICE = 'VIP_SERVICE',
	AVATAR_LAYER = 'AVATAR_LAYER',
}

export enum StoreType {
	APPSTORE = 'APPSTORE',
	PLAYSTORE = 'PLAYSTORE',
	JOKSTORE = 'JOKSTORE',
}

export enum PayByMode {
	TOKENS = 'TOKENS',
	STARS = 'STARS',
	DAYS = 'DAYS',
}

export interface JokerPlayerStatsDimmensionsInput {
	gameMode?: String[]
	dring?: String[]
	isOldSchoolDeck?: Boolean
	isPairMode?: Boolean
	isPrivate?: Boolean
	playFor?: PlayForOptions[]
	tournamentConfigKey?: String[]
	tournamentGroupKey?: String[]
}

export interface AvatarConfigInput {
	skinId: ID
	eyesId: ID
	mouthId: ID
	clothesId: ID
	hairId?: ID
	eyebrowsId?: ID
	facialHairId?: ID
	tattoos?: AvatarConfigTattooInput[]
	accessories: AvatarConfigAccessoryInput[]
}

export interface AvatarConfigTattooInput {
	layerId: ID
}

export interface AvatarConfigAccessoryInput {
	layerId: ID
	mode: AvatarConfigAccessoryMode
	index?: Int
}

export interface PlayerRatingChange {
	userId: ID
	addRating: Float
	afkRate?: Float
	speedRate?: Float
	disconnectsCount?: Int
	score?: Float
	place?: Int
	data?: JSON
}

export interface AppNotificationStatusInput {
	platformType: String
	notificationUserId?: String
}

export interface NotificationOptOutItemInput {
	key: String
	isDisabled: Boolean
}

export interface GameRoomProgressInput {
	roomRefId: String
	progress: Float
	tournamentId?: String
}

export interface MusicChannelInput {
	name: String
	logoUrl: String
	isFeatured: Boolean
	stream: MusicChannelStreamInput
}

export interface MusicChannelStreamInput {
	url: String
	isOnline: Boolean
}

export interface SongInput {
	title: String
	metadata?: JSON
	durationInSec?: Int
	youtubeVideoId?: String
}

export interface RoomInput {
	type: String
	subType?: String
	maxUsersLimit: Int
	requiredMinRating?: Float
	isPrivate?: Boolean
	isRanked?: Boolean
	onlyVerifiedPlayers?: Boolean
	isAntiCheatEnabled?: Boolean
	deckType?: DeckType
	isPairMode?: Boolean
	isStripMode?: Boolean
	themeCode?: String
}

export interface AvatarLayer {
	id: ID
	type: AvatarLayerType
	type2: AvatarLayerType2
	imageUrl: String
	name: String
	seasonCode: String
	count: Int
	index: Int
	isTakable: Boolean
}


export interface GiftPack {
	id: ID
	code: String
	giftBoxCount: Int
	style: JSON
	appStoreProductId: String
	totalItemsCount: Int
	userOwnsItemsCount: Int
	previewUsers: User[]
	packPrice?: Int
}


export interface User {
	id: ID
	nickname: String
	isNickAutoGenerated: Boolean
	isNickChangeAllowed: Boolean
	gender?: UserGender
	birthDate?: DateTime
	email?: String
	features: UserFeature[]
	pusherUrl?: String
	canWatchRewardedAds: Boolean
	nextRewardedAdsAvailableAt: DateTime
	isIncognitoModeActive: Boolean
	uiTheme: UiTheme
	extWalletPublicKey?: String
	extWalletType?: String
	blockedUserIds: String[]
	blockedUsers: BlockedUser[]
	status: UserStatus
	languageCode: String
	emotionCodes: String[]
	isVIP: Boolean
	VIPExpiresAt?: DateTime
	vipSubscription?: VIPSubscription
	hasRenewableVIPSubscription: Boolean
	tokens: Int
	pendingRewards: JSON[]
	player?: Player
	activeDevices: UserActiveDevice[]
	followingsCount: Int
	followersCount: Int
	friendsCount: Int
	onlineFriendsCount: Int
	followings: User[]
	followers: User[]
	friends: User[]
	friendsMetadata: JSON
	avatarKey: String
	avatarConfig: AvatarConfig
	avatarUrl: String
	giftBoxes: UserGiftBox[]
	ownedAvatarThemeCodes: String[]
	avatarActiveThemeCodes: String[]
	favoriteMusicChannels: MusicChannel[]
	favoriteSongs: Song[]
	confirmations: Confirmation[]
	activeTournament?: Tournament
	onlineStatus?: UserOnlineStatus
	activeQueueKey?: String
}


export interface UserFeature {
	code: String
	version?: Float
}


export interface BlockedUser {
	id: ID
	user: User
	blockedAt: DateTime
}


export interface VIPSubscription {
	isAutoRenewEnabled: Boolean
	store: VIPSubscriptionStore
	expiresAt: DateTime
	isExpired: Boolean
	transactionToken: String
}


export interface Player {
	id: ID
	userId: ID
	rating: Float
	data?: JSON
	level?: PlayerLevel
	availableLevels: PlayerLevel[]
	stars?: PlayerStars
	afkRate: Int
	theme?: String
	themeOptions?: JSON
	ownedThemes: String[]
	gamesLog: PlayerGameLog[]
	notificationConfig: PlayerNotificationConfig
	pusherUrl: String
	tickets: PlayerTicket[]
	subscribedTournamentKeys: String[]
	tournamentsStats: TournamentStats[]
	tournamentGroupsStats: TournamentGroupStats[]
	activeTournamentId?: String
	badges: PlayerBadge[]
	totalRespects: Int
	pairBans: PairBan[]
	room?: Room
	activeRoom?: ActiveRoomInfo
	specialStatuses: SpecialStatus[]
	activeSpecialStatus?: SpecialStatus
	selectedSpecialStatusKey?: String
	honorRate: Int
	honorRateBlockExpiresInDays?: Int
	honorRateFixPriceInStars?: Int
	honorRateFixPriceInStarsPercentage?: Int
	honorRateFixPriceInTokens?: Int
}


export interface PlayerLevel {
	id: ID
	name: String
	minRating: Float
	reLevelRating?: Float
}


export interface PlayerStars {
	id: ID
	current?: Int
	total?: Int
	leveledCount?: Int
	isMaster: Boolean
}


export interface PlayerGameLog {
	id: ID
	addedRating: Float
	newRating: Float
	isRanked: Boolean
	isStripMode: Boolean
	isTournament: Boolean
	level: PlayerLevel
	stars: PlayerStars
	data: JSON
	createdAt: DateTime
	roomRefId?: ID
	value?: Float
}


export interface PlayerNotificationConfig {
	platformType: String
	optInItems: NotificationOptInItem[]
}


export interface NotificationOptInItem {
	key: String
	isEnabled: Boolean
}


export interface PlayerTicket {
	channelKey: String
	count: Int
}


export interface TournamentStats {
	tournamentKey: String
	firstPlaceCount: Int
	top4Count: Int
	points: Int
}


export interface TournamentGroupStats {
	tournamentGroupKey: String
	place1Count: Int
	place2Count: Int
	place3Count: Int
	top50Count: Int
	top100Count: Int
}


export interface PlayerBadge {
	key: String
	count: Int
}


export interface PairBan {
	id: ID
	pairUserId: ID
	expiresInDays: Float
	applyTo?: String
}


export interface Room {
	id: ID
	type: String
	subType: String
	users: (User | undefined)[]
	createdAt: DateTime
	updatedAt: DateTime
	maxUsersLimit: Int
	requiredMinRating?: Float
	requiredMaxRating?: Float
	requiredMinLevel?: PlayerLevel
	kickedUserIds: ID[]
	leftPairKickedUsers: PairKickedUser[]
	rightPairKickedUsers: PairKickedUser[]
	confirmations: RoomConfirmation[]
	isPrivate: Boolean
	isRanked: Boolean
	hasActiveConfirmation: Boolean
	onlyVerifiedPlayers: Boolean
	serverUrl?: String
	passcode?: String
	referenceId?: String
	progress?: Float
	tournamentId?: ID
	deckType: DeckType
	isAntiCheatEnabled: Boolean
	isPairMode: Boolean
	isStripMode?: Boolean
	blockedUserIds: String[]
	themeCode?: String
}


export interface PairKickedUser {
	id: ID
	kickerUser?: User
	kickedUserId: ID
}


export interface RoomConfirmation {
	userId: ID
	isConfirmed: Boolean
}


export interface ActiveRoomInfo {
	room: Room
	referenceId?: ID
}


export interface SpecialStatus {
	id: ID
	key: String
	isExpired: Boolean
	expiresInDays: Int
	colorName?: String
}


export interface UserActiveDevice {
	id: ID
	model?: String
	manufacturer?: String
	operatingSystem?: String
	platformType?: String
	createdAt: DateTime
	lastUsedAt: DateTime
	hash: String
}


export interface AvatarConfig {
	skinId: ID
	eyesId: ID
	mouthId: ID
	clothesId: ID
	hairId?: ID
	eyebrowsId?: ID
	facialHairId?: ID
	accessories: AvatarConfigAccessory[]
	tatoos: AvatarConfigTattoo[]
	tattoos: AvatarConfigTattoo[]
}


export interface AvatarConfigAccessory {
	layerId: ID
	mode: AvatarConfigAccessoryMode
	index: Int
}


export interface AvatarConfigTattoo {
	layerId: ID
}


export interface UserGiftBox {
	id: ID
	giftBoxId: ID
	code: String
	count: Int
	style: JSON
	date?: DateTime
}


export interface MusicChannel {
	id: ID
	name: String
	logoUrl?: String
	isFeatured: Boolean
	isActive: Boolean
	isDisabled: Boolean
	activeStream?: MusicStream
	streams: MusicStream[]
	lastSong?: Song
}


export interface MusicStream {
	id: ID
	url: String
	isOnline: Boolean
}


export interface Song {
	id: ID
	title: String
	durationInSec?: Int
	youtubeVideoId?: String
	musicChannels: MusicChannel[]
}


export interface Confirmation {
	id: ID
	mode: ConfirmationMode
	entityType: String
	entityId: ID
}


export interface Tournament {
	id: ID
	key: String
	name: String
	groupKey?: String
	users: User[]
	rounds: TournamentRound[]
	finishedUserIds: String[]
	status: TournamentStatus
}


export interface TournamentRound {
	roundKey: String
	gameMode: String
	maxWinnersCount: Int
	rooms: TournamentRoom[]
	startsInSec?: Int
	isFinished: Boolean
}


export interface TournamentRoom {
	id: ID
	roomRefId?: String
	room?: Room
	roomUsers: TournamentRoomUser[]
	status: TournamentRoomStatus
	isPairMode?: Boolean
}


export interface TournamentRoomUser {
	user?: User
	stats?: TournamentRoomUserStats
}


export interface TournamentRoomUserStats {
	place: Int
	score: Float
	afkRate: Float
	isInNextRound: Boolean
}


export interface UserOnlineStatus {
	type: UserOnlineStatusType
	gameId?: String
	roomId?: String
}


export interface Game {
	id: ID
	gameServerUrl: String
	playerLevels: PlayerLevel[]
	banners: Banner[]
	giftBoxes: GameGiftBox[]
	activeSeasonGiftBox?: GameGiftBox
	data?: JSON
	gameFullResultUrl?: String
	gameSummaryResultUrl?: String
	gameResultPageUrl?: String
	translations: JSON
	respectPrice?: Int
	buzzPrice?: Int
	reportPrice?: Int
	followPrice?: Int
	stripModePrice?: Int
	blockPlayerPrice?: Int
	allowStripMode: Boolean
	gameThemes: GameTheme[]
	friendBuzzPrice?: Int
	maxRespectPerPlayerCount?: Int
	maxBuzzPerPlayerCount?: Int
	adsZoneIds?: JSON
	noAdsTokensCount: Int
	channelsConfiguration: JSON
	stripModeAllowedAccessoryIndexes: Int[]
	tournamentConfigs: TournamentConfig[]
	tournamentGroup?: TournamentGroup
	lastFinishedTournamentGroup?: TournamentGroup
}


export interface Banner {
	id: ID
	type: BannerType
	actionType: BannerActionType
	actionData: String
	data?: JSON
}


export interface GameGiftBox {
	id: ID
	code: String
	count: Int
	style: JSON
	appStoreProductId?: String
	isAllowedToSend: Boolean
	isAllowedToBuy: Boolean
	boxPrice?: Int
	packPrice?: Int
	totalItemsCount: Int
	userOwnsItemsCount: Int
	userOwnsPercentage: Int
}


export interface GameTheme {
	code: String
	productCode?: String
	giftBoxBackground?: String
	giftPackBackground?: String
	room?: JSON
	inGame?: JSON
}


export interface TournamentConfig {
	id: ID
	key: String
	tournamentGroupKey: String
	name: String
	isSystem: Boolean
	brandColor: String
	logoUrl: String
	channelKey: String
	ticketPrice: Int
	requiredPlayersCount: Int
	giftBoxWinnersCount: Int
	giftBoxCode?: String
	roundConfigs: TournamentConfigRound[]
	status: TournamentConfigStatus
	placeRewards: TournamentPlaceReward[]
	viewMode: TournamentConfigViewMode
	logoDisplayMode: TournamentConfigLogoDisplayMode
	locationName?: String
	isUserSubscribed: Boolean
	isActive: Boolean
	startsAt?: DateTime
	endsAt?: DateTime
}


export interface TournamentConfigRound {
	roundKey: String
	gameMode: String
	maxWinnersCount: Int
}


export interface TournamentPlaceReward {
	place: Int
	rewards: TournamentReward[]
}


export interface TournamentGroup {
	id: ID
	key: String
	isStarted: Boolean
	hasStarted: Boolean
	isFinished: Boolean
	isFinishing: Boolean
	startsAt: DateTime
	endsAt: DateTime
	viewerPoints: Int
	userRatings: TournamentGroupUserRating[]
}


export interface TournamentGroupUserRating {
	id: ID
	user: User
	points: Int
	playCount: Int
	lastPlayedAt: DateTime
	rank?: Int
}


export interface Game2 {
	id: ID
	channelKey: String
	usersCount: Int
	tags: String[]
	likesCount: Int
}


export interface TopPlayerItem {
	id: ID
	rank: Int
	user: User
	player: Player
	value: Int
	data?: JSON
}


export interface PlayerRanks {
	overallAllTimes?: Int
	overall?: Int
	fastGrowing?: Int
	mostActive?: Int
}


export interface TournamentGroupConfig {
	id: ID
	key: String
	state: TournamentGroupConfigState
	isFinishing: Boolean
	activeTournamentGroupId?: ID
	tournaments: TournamentConfig[]
}


export interface ShopProduct {
	id: ID
	key: String
	groupKey: String
	price: Int
	finalPrice: Int
	content: JSON
	contentItemsCount: Int
	isAvailable: Boolean
	isLimitedTimeOffer: Boolean
	vipDiscountPercentage: Int
	regularDiscountPercentage: Int
	promo?: ShopProductPromo
	offerEndsAt?: DateTime
	userOwnsContentItemsCount: Int
	previewUsers: User[]
}


export interface ShopProductPromo {
	imageUrl: String
	backgroundColor?: String
	toolbarBackgroundColor?: String
	previewBackgroundColor?: String
	backgroundPatternUrl?: String
}


export interface StoreProduct {
	id: ID
	code: String
	name: String
	description?: String
	groupKey: String
	price: Float
	formattedPrice: String
	iapKey?: String
	data?: JSON
}


export interface JokerPlayerStats {
	gamesCount: Int
	timePlayedInMin: Float
	highestScore: Int
	highestScoreRoomId: ID
	goodTakesCount: Int
	fullTakes9Count: Int
	place1Count: Int
	place2Count: Int
	placePair1Count: Int
	jokerWantsCount: Int
	jokerDontWantsCount: Int
	fillOpponentsCount: Int
	eliminatedMastersCount: Int
	eliminatedJokersCount: Int
	receivedRespectsCount: Int
	receivedGiftBoxesCount: Int
	receivedDringsCount: Int
	receivedRatingsCount: Int
	sentBuzzCount: Int
	bonusCount: Int
	bonus8Count: Int
	bonus9Count: Int
	dringgedOpponentsCount: Int
	dringgedMastersCount: Int
	dringgedJokersCount: Int
	maxDringgedPlayersInRound: Int
	maxDringgedPlayersInRoundRoomId: ID
	startedAt?: DateTime
	lastUpdatedAt?: DateTime
}


export interface ConversationMessage {
	id: ID
	message: String
	sentAt?: DateTime
	isOpen: Boolean
	lastOpenedAt?: DateTime
}


export interface ReferralData {
	uniqueUsersCount: Int
	convertedUsersCount: Int
}


export interface RewardInfo {
	id: ID
	type: String
	title: String
	reward: String
	rewardData?: JSON
	information: String
	progressItems: RewardInfoProgress[]
}


export interface RewardInfoProgress {
	id: ID
	title: String
	value: Int
	maxValue: Int
}


export interface Queue {
	id: ID
	key: String
	currentUsersCount: Int
	requiredUsersCount: Int
}


export interface GameConfig {
	id: ID
	autoMatchQueueKey: String
	favoriteCount: Int
	componentUrl: String
	tags: String[]
	promoBackground: String
}


export interface RoomV3 {
	id: ID
	userIds: ID[]
	gameServerKey: String
	componentUrl: String
}


export interface OpenedGiftBoxResult {
	type: OpenedGiftBoxResultType
	data: JSON
}


export interface PostGameResult {
	wasAlreadyFinished?: Boolean
	isRanked: Boolean
	players: PostGamePlayer[]
}


export interface PostGamePlayer {
	id: ID
	userId: ID
	rating: Float
	tokensCount: Int
	skipMinusPlaceRating: Boolean
}


export interface RoomMatchRequestResult {
	id: ID
	estimateInSec?: Float
}


export interface AuthResult {
	accessToken: String
	user: User
	authToken?: String
}


export interface MusicChannelUpdate {
	musicChannel: MusicChannel
	action: String
}


export interface RoomConfirmationUpdate {
	room: Room
	timeLeftInSec: Int
}


export interface RoomConfirmationComplete {
	room: Room
	isConfirmed: Boolean
	referenceId: String
}


export interface RoomChatMessage {
	room: Room
	user: User
	message: String
	isEmotion: Boolean
}


export interface RoomUpdate {
	room: Room
	action: String
}


export interface TournamentRewardPoints {
	type: String
	points: Int
}


export interface TournamentRewardTicket {
	type: String
	tournamentKey: String
	count: Int
}


export interface TournamentRewardCrown {
	type: String
}


export interface UserDevice {
	id: ID
	deviceInfo: String
	fullname?: String
}


export interface TournamentReward {
	type: String
}



// Query props -----------------------------------
interface QueryAvatarLayersProps {
	gameId?: ID
	type?: AvatarLayerType
}

interface QueryGiftPackProps {
	gameId: ID
	code: String
}

interface QueryAvatarLayersByIdsProps {
	ids: ID[]
}

interface QueryGameProps {
	gameId: String
}

interface QueryTopPlayersProps {
	type: TopPlayerType
	gameId: String
	skip?: Int
	limit?: Int
	includeViewer?: Boolean
}

interface QueryViewerPlayerRanksProps {
	gameId: String
}

interface QueryHasMandatoryUpdateProps {
	gameId: String
	clientVersion: String
	platform: String
}

interface QueryPlayersByStatusProps {
	gameId: String
	specialStatusKey: String
	skip?: Int
	limit?: Int
}

interface QueryJokerGamesLogProps {
	gameId: ID
	userId: ID
	skip?: Int
	limit?: Int
	statsKey?: String
	statsValueGt?: Float
	dimmensions?: JokerPlayerStatsDimmensionsInput
}

interface QueryMusicChannelsProps {
	onlyActive?: Boolean
	skip?: Int
	limit?: Int
}

interface QueryRoomsProps {
	type: String
	skip?: Int
	limit?: Int
}

interface QueryRoomProps {
	id: ID
}

interface QueryTournamentConfigProps {
	key: String
}

interface QueryTournamentGroupConfigsProps {
	gameId: String
}

interface QueryTournamentProps {
	id: ID
}

interface QueryTournamentGroupProps {
	id: ID
}

interface QueryPastTournamentGroupsProps {
	groupKey: String
}

interface QueryShopProductsProps {
	gameId: String
}

interface QueryShopProductProps {
	productKey: String
	gameId: String
}

interface QueryStoreProductsProps {
	gameId: String
	platformType: String
}

interface QueryUserProps {
	id?: ID
}

interface QueryPlayerProps {
	userId: ID
	gameId: String
}

interface QueryJokerPlayerStatsProps {
	userId: ID
	dimmensions?: JokerPlayerStatsDimmensionsInput
}

interface QueryFriendConversationProps {
	friendUserId: ID
}

interface QueryFilterFollowingUserIdsProps {
	userIds: ID[]
}

interface QueryReferralDataProps {
	dataId: ID
	referrerUserId?: ID
}

interface QueryRewardsProps {
	gameId?: ID
	languageCode?: String
}

interface QueryRoomByIdProps {
	id: ID
}


// Query apis ------------------------------------
export class Query {

	constructor(private client: ApolloClient<any>, private defaultOptions: GraphqlCallOptions = {} ) { }

	onlinePlayersCount(
		
		
			
			options?: GraphqlCallOptions  & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const query = gql2`
		query onlinePlayersCount {
			onlinePlayersCount
		}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
		}).then(result => getResultData<Int>(result, 'onlinePlayersCount'))
	}

	avatarLayers(
		props: QueryAvatarLayersProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'AvatarLayerData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query avatarLayers($gameId: ID, $type: AvatarLayerType) {
			avatarLayers(gameId: $gameId, type: $type) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<AvatarLayer[]>(result, 'avatarLayers'))
	}

	giftPack(
		props: QueryGiftPackProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'GiftPackData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query giftPack($gameId: ID!, $code: String!) {
			giftPack(gameId: $gameId, code: $code) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<GiftPack>(result, 'giftPack'))
	}

	faceMaskUsagePercentage(
		
		
			
			options?: GraphqlCallOptions  & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const query = gql2`
		query faceMaskUsagePercentage {
			faceMaskUsagePercentage
		}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
		}).then(result => getResultData<Float>(result, 'faceMaskUsagePercentage'))
	}

	avatarLayersByIds(
		props: QueryAvatarLayersByIdsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'AvatarLayerData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query avatarLayersByIds($ids: [ID!]!) {
			avatarLayersByIds(ids: $ids) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<AvatarLayer[]>(result, 'avatarLayersByIds'))
	}

	game(
		props: QueryGameProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'GameData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query game($gameId: String!) {
			game(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<Game>(result, 'game'))
	}

	games(
		
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'Game2Data'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query games {
			games {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
		}).then(result => getResultData<Game2[]>(result, 'games'))
	}

	topPlayers(
		props: QueryTopPlayersProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TopPlayerItemData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query topPlayers($type: TopPlayerType!, $gameId: String!, $skip: Int, $limit: Int, $includeViewer: Boolean) {
			topPlayers(type: $type, gameId: $gameId, skip: $skip, limit: $limit, includeViewer: $includeViewer) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<TopPlayerItem[]>(result, 'topPlayers'))
	}

	viewerPlayerRanks(
		props: QueryViewerPlayerRanksProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'PlayerRanksData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query viewerPlayerRanks($gameId: String!) {
			viewerPlayerRanks(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<PlayerRanks>(result, 'viewerPlayerRanks'))
	}

	hasMandatoryUpdate(
		props: QueryHasMandatoryUpdateProps,
		
			
			options?: GraphqlCallOptions  & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const query = gql2`
		query hasMandatoryUpdate($gameId: String!, $clientVersion: String!, $platform: String!) {
			hasMandatoryUpdate(gameId: $gameId, clientVersion: $clientVersion, platform: $platform)
		}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'hasMandatoryUpdate'))
	}

	playersByStatus(
		props: QueryPlayersByStatusProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query playersByStatus($gameId: String!, $specialStatusKey: String!, $skip: Int, $limit: Int) {
			playersByStatus(gameId: $gameId, specialStatusKey: $specialStatusKey, skip: $skip, limit: $limit) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<User[]>(result, 'playersByStatus'))
	}

	jokerGamesLog(
		props: QueryJokerGamesLogProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'PlayerGameLogData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query jokerGamesLog($gameId: ID!, $userId: ID!, $skip: Int, $limit: Int, $statsKey: String, $statsValueGt: Float, $dimmensions: JokerPlayerStatsDimmensionsInput) {
			jokerGamesLog(gameId: $gameId, userId: $userId, skip: $skip, limit: $limit, statsKey: $statsKey, statsValueGt: $statsValueGt, dimmensions: $dimmensions) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<PlayerGameLog[]>(result, 'jokerGamesLog'))
	}

	musicChannels(
		props: QueryMusicChannelsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'MusicChannelData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query musicChannels($onlyActive: Boolean, $skip: Int, $limit: Int) {
			musicChannels(onlyActive: $onlyActive, skip: $skip, limit: $limit) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<MusicChannel[]>(result, 'musicChannels'))
	}

	rooms(
		props: QueryRoomsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query rooms($type: String!, $skip: Int, $limit: Int) {
			rooms(type: $type, skip: $skip, limit: $limit) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<Room[]>(result, 'rooms'))
	}

	room(
		props: QueryRoomProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query room($id: ID!) {
			room(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<Room>(result, 'room'))
	}

	tournamentConfig(
		props: QueryTournamentConfigProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentConfigData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournamentConfig($key: String!) {
			tournamentConfig(key: $key) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<TournamentConfig>(result, 'tournamentConfig'))
	}

	tournamentGroupConfigs(
		props: QueryTournamentGroupConfigsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentGroupConfigData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournamentGroupConfigs($gameId: String!) {
			tournamentGroupConfigs(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<TournamentGroupConfig[]>(result, 'tournamentGroupConfigs'))
	}

	tournament(
		props: QueryTournamentProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournament($id: ID!) {
			tournament(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<Tournament>(result, 'tournament'))
	}

	tournamentGroup(
		props: QueryTournamentGroupProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentGroupData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournamentGroup($id: ID!) {
			tournamentGroup(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<TournamentGroup>(result, 'tournamentGroup'))
	}

	pastTournamentGroups(
		props: QueryPastTournamentGroupsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentGroupData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query pastTournamentGroups($groupKey: String!) {
			pastTournamentGroups(groupKey: $groupKey) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<TournamentGroup[]>(result, 'pastTournamentGroups'))
	}

	shopProducts(
		props: QueryShopProductsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ShopProductData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query shopProducts($gameId: String!) {
			shopProducts(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<ShopProduct[]>(result, 'shopProducts'))
	}

	shopProduct(
		props: QueryShopProductProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ShopProductData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query shopProduct($productKey: String!, $gameId: String!) {
			shopProduct(productKey: $productKey, gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<ShopProduct>(result, 'shopProduct'))
	}

	storeProducts(
		props: QueryStoreProductsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'StoreProductData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query storeProducts($gameId: String!, $platformType: String!) {
			storeProducts(gameId: $gameId, platformType: $platformType) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<StoreProduct[]>(result, 'storeProducts'))
	}

	viewer(
		
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query viewer {
			viewer {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
		}).then(result => getResultData<User>(result, 'viewer'))
	}

	user(
		props: QueryUserProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query user($id: ID) {
			user(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<User>(result, 'user'))
	}

	player(
		props: QueryPlayerProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'PlayerData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query player($userId: ID!, $gameId: String!) {
			player(userId: $userId, gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<Player>(result, 'player'))
	}

	jokerPlayerStats(
		props: QueryJokerPlayerStatsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'JokerPlayerStatsData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query jokerPlayerStats($userId: ID!, $dimmensions: JokerPlayerStatsDimmensionsInput) {
			jokerPlayerStats(userId: $userId, dimmensions: $dimmensions) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<JokerPlayerStats>(result, 'jokerPlayerStats'))
	}

	friendConversation(
		props: QueryFriendConversationProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ConversationMessageData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query friendConversation($friendUserId: ID!) {
			friendConversation(friendUserId: $friendUserId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<ConversationMessage>(result, 'friendConversation'))
	}

	filterFollowingUserIds(
		props: QueryFilterFollowingUserIdsProps,
		
			
			options?: GraphqlCallOptions  & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const query = gql2`
		query filterFollowingUserIds($userIds: [ID!]!) {
			filterFollowingUserIds(userIds: $userIds)
		}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<ID[]>(result, 'filterFollowingUserIds'))
	}

	referralData(
		props: QueryReferralDataProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ReferralDataData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query referralData($dataId: ID!, $referrerUserId: ID) {
			referralData(dataId: $dataId, referrerUserId: $referrerUserId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<ReferralData>(result, 'referralData'))
	}

	rewards(
		props: QueryRewardsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RewardInfoData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query rewards($gameId: ID, $languageCode: String) {
			rewards(gameId: $gameId, languageCode: $languageCode) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<RewardInfo[]>(result, 'rewards'))
	}

	queues(
		
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'QueueData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query queues {
			queues {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
		}).then(result => getResultData<Queue[]>(result, 'queues'))
	}

	gameConfigs(
		
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'GameConfigData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query gameConfigs {
			gameConfigs {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
		}).then(result => getResultData<GameConfig[]>(result, 'gameConfigs'))
	}

	roomById(
		props: QueryRoomByIdProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomV3Data'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query roomById($id: ID!) {
			roomById(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.query({
			...mergedOptions,
			query,
			variables: props,
		}).then(result => getResultData<RoomV3>(result, 'roomById'))
	}
}


// WatchQuery props -----------------------------------


// WatchQuery apis ------------------------------------
export class WatchQuery {

	constructor(private client: ApolloClient<any>, private defaultOptions: GraphqlCallOptions = {} , private subscriptionDocument: SubscriptionDocument | null = null) { }

	onlinePlayersCount(
		
		
			
			options?: GraphqlCallOptions  & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ onlinePlayersCount : Int}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const query = gql2`
		query onlinePlayersCount {
			onlinePlayersCount
		}
		`
		const zenObs = this.client.watchQuery<Int>({
			...mergedOptions,
			query,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<Int>(result, 'onlinePlayersCount'))
		)
	}

	avatarLayers(
		props: QueryAvatarLayersProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ avatarLayers : AvatarLayer[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'AvatarLayerData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query avatarLayers($gameId: ID, $type: AvatarLayerType) {
			avatarLayers(gameId: $gameId, type: $type) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<AvatarLayer[]>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<AvatarLayer[]>(result, 'avatarLayers'))
		)
	}

	giftPack(
		props: QueryGiftPackProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ giftPack : GiftPack}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'GiftPackData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query giftPack($gameId: ID!, $code: String!) {
			giftPack(gameId: $gameId, code: $code) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<GiftPack>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<GiftPack>(result, 'giftPack'))
		)
	}

	faceMaskUsagePercentage(
		
		
			
			options?: GraphqlCallOptions  & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ faceMaskUsagePercentage : Float}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const query = gql2`
		query faceMaskUsagePercentage {
			faceMaskUsagePercentage
		}
		`
		const zenObs = this.client.watchQuery<Float>({
			...mergedOptions,
			query,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<Float>(result, 'faceMaskUsagePercentage'))
		)
	}

	avatarLayersByIds(
		props: QueryAvatarLayersByIdsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ avatarLayersByIds : AvatarLayer[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'AvatarLayerData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query avatarLayersByIds($ids: [ID!]!) {
			avatarLayersByIds(ids: $ids) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<AvatarLayer[]>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<AvatarLayer[]>(result, 'avatarLayersByIds'))
		)
	}

	game(
		props: QueryGameProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ game : Game}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'GameData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query game($gameId: String!) {
			game(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<Game>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<Game>(result, 'game'))
		)
	}

	games(
		
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ games : Game2[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'Game2Data'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query games {
			games {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<Game2[]>({
			...mergedOptions,
			query,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<Game2[]>(result, 'games'))
		)
	}

	topPlayers(
		props: QueryTopPlayersProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ topPlayers : TopPlayerItem[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TopPlayerItemData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query topPlayers($type: TopPlayerType!, $gameId: String!, $skip: Int, $limit: Int, $includeViewer: Boolean) {
			topPlayers(type: $type, gameId: $gameId, skip: $skip, limit: $limit, includeViewer: $includeViewer) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<TopPlayerItem[]>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<TopPlayerItem[]>(result, 'topPlayers'))
		)
	}

	viewerPlayerRanks(
		props: QueryViewerPlayerRanksProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ viewerPlayerRanks : PlayerRanks}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'PlayerRanksData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query viewerPlayerRanks($gameId: String!) {
			viewerPlayerRanks(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<PlayerRanks>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<PlayerRanks>(result, 'viewerPlayerRanks'))
		)
	}

	hasMandatoryUpdate(
		props: QueryHasMandatoryUpdateProps,
		
			
			options?: GraphqlCallOptions  & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ hasMandatoryUpdate : Boolean}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const query = gql2`
		query hasMandatoryUpdate($gameId: String!, $clientVersion: String!, $platform: String!) {
			hasMandatoryUpdate(gameId: $gameId, clientVersion: $clientVersion, platform: $platform)
		}
		`
		const zenObs = this.client.watchQuery<Boolean>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<Boolean>(result, 'hasMandatoryUpdate'))
		)
	}

	playersByStatus(
		props: QueryPlayersByStatusProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ playersByStatus : User[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query playersByStatus($gameId: String!, $specialStatusKey: String!, $skip: Int, $limit: Int) {
			playersByStatus(gameId: $gameId, specialStatusKey: $specialStatusKey, skip: $skip, limit: $limit) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<User[]>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<User[]>(result, 'playersByStatus'))
		)
	}

	jokerGamesLog(
		props: QueryJokerGamesLogProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ jokerGamesLog : PlayerGameLog[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'PlayerGameLogData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query jokerGamesLog($gameId: ID!, $userId: ID!, $skip: Int, $limit: Int, $statsKey: String, $statsValueGt: Float, $dimmensions: JokerPlayerStatsDimmensionsInput) {
			jokerGamesLog(gameId: $gameId, userId: $userId, skip: $skip, limit: $limit, statsKey: $statsKey, statsValueGt: $statsValueGt, dimmensions: $dimmensions) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<PlayerGameLog[]>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<PlayerGameLog[]>(result, 'jokerGamesLog'))
		)
	}

	musicChannels(
		props: QueryMusicChannelsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ musicChannels : MusicChannel[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'MusicChannelData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query musicChannels($onlyActive: Boolean, $skip: Int, $limit: Int) {
			musicChannels(onlyActive: $onlyActive, skip: $skip, limit: $limit) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<MusicChannel[]>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<MusicChannel[]>(result, 'musicChannels'))
		)
	}

	rooms(
		props: QueryRoomsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ rooms : Room[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query rooms($type: String!, $skip: Int, $limit: Int) {
			rooms(type: $type, skip: $skip, limit: $limit) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<Room[]>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<Room[]>(result, 'rooms'))
		)
	}

	room(
		props: QueryRoomProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ room : Room}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query room($id: ID!) {
			room(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<Room>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<Room>(result, 'room'))
		)
	}

	tournamentConfig(
		props: QueryTournamentConfigProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ tournamentConfig : TournamentConfig}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentConfigData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournamentConfig($key: String!) {
			tournamentConfig(key: $key) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<TournamentConfig>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<TournamentConfig>(result, 'tournamentConfig'))
		)
	}

	tournamentGroupConfigs(
		props: QueryTournamentGroupConfigsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ tournamentGroupConfigs : TournamentGroupConfig[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentGroupConfigData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournamentGroupConfigs($gameId: String!) {
			tournamentGroupConfigs(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<TournamentGroupConfig[]>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<TournamentGroupConfig[]>(result, 'tournamentGroupConfigs'))
		)
	}

	tournament(
		props: QueryTournamentProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ tournament : Tournament}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournament($id: ID!) {
			tournament(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<Tournament>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<Tournament>(result, 'tournament'))
		)
	}

	tournamentGroup(
		props: QueryTournamentGroupProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ tournamentGroup : TournamentGroup}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentGroupData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournamentGroup($id: ID!) {
			tournamentGroup(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<TournamentGroup>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<TournamentGroup>(result, 'tournamentGroup'))
		)
	}

	pastTournamentGroups(
		props: QueryPastTournamentGroupsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ pastTournamentGroups : TournamentGroup[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentGroupData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query pastTournamentGroups($groupKey: String!) {
			pastTournamentGroups(groupKey: $groupKey) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<TournamentGroup[]>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<TournamentGroup[]>(result, 'pastTournamentGroups'))
		)
	}

	shopProducts(
		props: QueryShopProductsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ shopProducts : ShopProduct[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ShopProductData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query shopProducts($gameId: String!) {
			shopProducts(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<ShopProduct[]>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<ShopProduct[]>(result, 'shopProducts'))
		)
	}

	shopProduct(
		props: QueryShopProductProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ shopProduct : ShopProduct}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ShopProductData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query shopProduct($productKey: String!, $gameId: String!) {
			shopProduct(productKey: $productKey, gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<ShopProduct>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<ShopProduct>(result, 'shopProduct'))
		)
	}

	storeProducts(
		props: QueryStoreProductsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ storeProducts : StoreProduct[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'StoreProductData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query storeProducts($gameId: String!, $platformType: String!) {
			storeProducts(gameId: $gameId, platformType: $platformType) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<StoreProduct[]>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<StoreProduct[]>(result, 'storeProducts'))
		)
	}

	viewer(
		
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ viewer : User}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query viewer {
			viewer {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<User>({
			...mergedOptions,
			query,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<User>(result, 'viewer'))
		)
	}

	user(
		props: QueryUserProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ user : User}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query user($id: ID) {
			user(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<User>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<User>(result, 'user'))
		)
	}

	player(
		props: QueryPlayerProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ player : Player}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'PlayerData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query player($userId: ID!, $gameId: String!) {
			player(userId: $userId, gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<Player>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<Player>(result, 'player'))
		)
	}

	jokerPlayerStats(
		props: QueryJokerPlayerStatsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ jokerPlayerStats : JokerPlayerStats}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'JokerPlayerStatsData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query jokerPlayerStats($userId: ID!, $dimmensions: JokerPlayerStatsDimmensionsInput) {
			jokerPlayerStats(userId: $userId, dimmensions: $dimmensions) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<JokerPlayerStats>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<JokerPlayerStats>(result, 'jokerPlayerStats'))
		)
	}

	friendConversation(
		props: QueryFriendConversationProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ friendConversation : ConversationMessage}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ConversationMessageData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query friendConversation($friendUserId: ID!) {
			friendConversation(friendUserId: $friendUserId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<ConversationMessage>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<ConversationMessage>(result, 'friendConversation'))
		)
	}

	filterFollowingUserIds(
		props: QueryFilterFollowingUserIdsProps,
		
			
			options?: GraphqlCallOptions  & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ filterFollowingUserIds : ID[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const query = gql2`
		query filterFollowingUserIds($userIds: [ID!]!) {
			filterFollowingUserIds(userIds: $userIds)
		}
		`
		const zenObs = this.client.watchQuery<ID[]>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<ID[]>(result, 'filterFollowingUserIds'))
		)
	}

	referralData(
		props: QueryReferralDataProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ referralData : ReferralData}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ReferralDataData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query referralData($dataId: ID!, $referrerUserId: ID) {
			referralData(dataId: $dataId, referrerUserId: $referrerUserId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<ReferralData>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<ReferralData>(result, 'referralData'))
		)
	}

	rewards(
		props: QueryRewardsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ rewards : RewardInfo[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RewardInfoData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query rewards($gameId: ID, $languageCode: String) {
			rewards(gameId: $gameId, languageCode: $languageCode) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<RewardInfo[]>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<RewardInfo[]>(result, 'rewards'))
		)
	}

	queues(
		
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ queues : Queue[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'QueueData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query queues {
			queues {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<Queue[]>({
			...mergedOptions,
			query,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<Queue[]>(result, 'queues'))
		)
	}

	gameConfigs(
		
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ gameConfigs : GameConfig[]}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'GameConfigData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query gameConfigs {
			gameConfigs {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<GameConfig[]>({
			...mergedOptions,
			query,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<GameConfig[]>(result, 'gameConfigs'))
		)
	}

	roomById(
		props: QueryRoomByIdProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedWatchQueryOptions & SubscribeToMoreOptions<{ roomById : RoomV3}>,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomV3Data'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query roomById($id: ID!) {
			roomById(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		const zenObs = this.client.watchQuery<RoomV3>({
			...mergedOptions,
			query,
			variables: props,
		})

		const { subscribeToMore = [] } = mergedOptions

		subscribeToMore.forEach((x: any) => {
		  zenObs.subscribeToMore({
			...(typeof x.graphqlDocument === 'function'
						? x.graphqlDocument(this.subscriptionDocument)
						: x.graphqlDocument),
			updateQuery: x.updateQuery,
		  })
		})

		return from(fixObservable(zenObs)).pipe(
			map(result => getResultData<RoomV3>(result, 'roomById'))
		)
	}
}


// RefetchQuery props -----------------------------------
interface QueryAvatarLayersProps {
	gameId?: ID
	type?: AvatarLayerType
}

interface QueryGiftPackProps {
	gameId: ID
	code: String
}

interface QueryAvatarLayersByIdsProps {
	ids: ID[]
}

interface QueryGameProps {
	gameId: String
}

interface QueryTopPlayersProps {
	type: TopPlayerType
	gameId: String
	skip?: Int
	limit?: Int
	includeViewer?: Boolean
}

interface QueryViewerPlayerRanksProps {
	gameId: String
}

interface QueryHasMandatoryUpdateProps {
	gameId: String
	clientVersion: String
	platform: String
}

interface QueryPlayersByStatusProps {
	gameId: String
	specialStatusKey: String
	skip?: Int
	limit?: Int
}

interface QueryJokerGamesLogProps {
	gameId: ID
	userId: ID
	skip?: Int
	limit?: Int
	statsKey?: String
	statsValueGt?: Float
	dimmensions?: JokerPlayerStatsDimmensionsInput
}

interface QueryMusicChannelsProps {
	onlyActive?: Boolean
	skip?: Int
	limit?: Int
}

interface QueryRoomsProps {
	type: String
	skip?: Int
	limit?: Int
}

interface QueryRoomProps {
	id: ID
}

interface QueryTournamentConfigProps {
	key: String
}

interface QueryTournamentGroupConfigsProps {
	gameId: String
}

interface QueryTournamentProps {
	id: ID
}

interface QueryTournamentGroupProps {
	id: ID
}

interface QueryPastTournamentGroupsProps {
	groupKey: String
}

interface QueryShopProductsProps {
	gameId: String
}

interface QueryShopProductProps {
	productKey: String
	gameId: String
}

interface QueryStoreProductsProps {
	gameId: String
	platformType: String
}

interface QueryUserProps {
	id?: ID
}

interface QueryPlayerProps {
	userId: ID
	gameId: String
}

interface QueryJokerPlayerStatsProps {
	userId: ID
	dimmensions?: JokerPlayerStatsDimmensionsInput
}

interface QueryFriendConversationProps {
	friendUserId: ID
}

interface QueryFilterFollowingUserIdsProps {
	userIds: ID[]
}

interface QueryReferralDataProps {
	dataId: ID
	referrerUserId?: ID
}

interface QueryRewardsProps {
	gameId?: ID
	languageCode?: String
}

interface QueryRoomByIdProps {
	id: ID
}


// RefetchQuery apis ------------------------------------
export class RefetchQuery {

	constructor(private client: ApolloClient<any>, private defaultOptions: GraphqlCallOptions = {} ) { }

	onlinePlayersCount(
		
		
			
			options?: GraphqlCallOptions  & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const query = gql2`
		query onlinePlayersCount {
			onlinePlayersCount
		}
		`
		return {
			query,
		}
	}

	avatarLayers(
		props: QueryAvatarLayersProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'AvatarLayerData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query avatarLayers($gameId: ID, $type: AvatarLayerType) {
			avatarLayers(gameId: $gameId, type: $type) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	giftPack(
		props: QueryGiftPackProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'GiftPackData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query giftPack($gameId: ID!, $code: String!) {
			giftPack(gameId: $gameId, code: $code) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	faceMaskUsagePercentage(
		
		
			
			options?: GraphqlCallOptions  & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const query = gql2`
		query faceMaskUsagePercentage {
			faceMaskUsagePercentage
		}
		`
		return {
			query,
		}
	}

	avatarLayersByIds(
		props: QueryAvatarLayersByIdsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'AvatarLayerData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query avatarLayersByIds($ids: [ID!]!) {
			avatarLayersByIds(ids: $ids) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	game(
		props: QueryGameProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'GameData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query game($gameId: String!) {
			game(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	games(
		
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'Game2Data'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query games {
			games {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
		}
	}

	topPlayers(
		props: QueryTopPlayersProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TopPlayerItemData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query topPlayers($type: TopPlayerType!, $gameId: String!, $skip: Int, $limit: Int, $includeViewer: Boolean) {
			topPlayers(type: $type, gameId: $gameId, skip: $skip, limit: $limit, includeViewer: $includeViewer) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	viewerPlayerRanks(
		props: QueryViewerPlayerRanksProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'PlayerRanksData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query viewerPlayerRanks($gameId: String!) {
			viewerPlayerRanks(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	hasMandatoryUpdate(
		props: QueryHasMandatoryUpdateProps,
		
			
			options?: GraphqlCallOptions  & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const query = gql2`
		query hasMandatoryUpdate($gameId: String!, $clientVersion: String!, $platform: String!) {
			hasMandatoryUpdate(gameId: $gameId, clientVersion: $clientVersion, platform: $platform)
		}
		`
		return {
			query,
			variables: props,
		}
	}

	playersByStatus(
		props: QueryPlayersByStatusProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query playersByStatus($gameId: String!, $specialStatusKey: String!, $skip: Int, $limit: Int) {
			playersByStatus(gameId: $gameId, specialStatusKey: $specialStatusKey, skip: $skip, limit: $limit) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	jokerGamesLog(
		props: QueryJokerGamesLogProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'PlayerGameLogData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query jokerGamesLog($gameId: ID!, $userId: ID!, $skip: Int, $limit: Int, $statsKey: String, $statsValueGt: Float, $dimmensions: JokerPlayerStatsDimmensionsInput) {
			jokerGamesLog(gameId: $gameId, userId: $userId, skip: $skip, limit: $limit, statsKey: $statsKey, statsValueGt: $statsValueGt, dimmensions: $dimmensions) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	musicChannels(
		props: QueryMusicChannelsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'MusicChannelData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query musicChannels($onlyActive: Boolean, $skip: Int, $limit: Int) {
			musicChannels(onlyActive: $onlyActive, skip: $skip, limit: $limit) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	rooms(
		props: QueryRoomsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query rooms($type: String!, $skip: Int, $limit: Int) {
			rooms(type: $type, skip: $skip, limit: $limit) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	room(
		props: QueryRoomProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query room($id: ID!) {
			room(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	tournamentConfig(
		props: QueryTournamentConfigProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentConfigData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournamentConfig($key: String!) {
			tournamentConfig(key: $key) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	tournamentGroupConfigs(
		props: QueryTournamentGroupConfigsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentGroupConfigData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournamentGroupConfigs($gameId: String!) {
			tournamentGroupConfigs(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	tournament(
		props: QueryTournamentProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournament($id: ID!) {
			tournament(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	tournamentGroup(
		props: QueryTournamentGroupProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentGroupData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournamentGroup($id: ID!) {
			tournamentGroup(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	pastTournamentGroups(
		props: QueryPastTournamentGroupsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentGroupData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query pastTournamentGroups($groupKey: String!) {
			pastTournamentGroups(groupKey: $groupKey) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	shopProducts(
		props: QueryShopProductsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ShopProductData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query shopProducts($gameId: String!) {
			shopProducts(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	shopProduct(
		props: QueryShopProductProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ShopProductData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query shopProduct($productKey: String!, $gameId: String!) {
			shopProduct(productKey: $productKey, gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	storeProducts(
		props: QueryStoreProductsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'StoreProductData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query storeProducts($gameId: String!, $platformType: String!) {
			storeProducts(gameId: $gameId, platformType: $platformType) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	viewer(
		
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query viewer {
			viewer {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
		}
	}

	user(
		props: QueryUserProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query user($id: ID) {
			user(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	player(
		props: QueryPlayerProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'PlayerData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query player($userId: ID!, $gameId: String!) {
			player(userId: $userId, gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	jokerPlayerStats(
		props: QueryJokerPlayerStatsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'JokerPlayerStatsData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query jokerPlayerStats($userId: ID!, $dimmensions: JokerPlayerStatsDimmensionsInput) {
			jokerPlayerStats(userId: $userId, dimmensions: $dimmensions) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	friendConversation(
		props: QueryFriendConversationProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ConversationMessageData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query friendConversation($friendUserId: ID!) {
			friendConversation(friendUserId: $friendUserId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	filterFollowingUserIds(
		props: QueryFilterFollowingUserIdsProps,
		
			
			options?: GraphqlCallOptions  & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const query = gql2`
		query filterFollowingUserIds($userIds: [ID!]!) {
			filterFollowingUserIds(userIds: $userIds)
		}
		`
		return {
			query,
			variables: props,
		}
	}

	referralData(
		props: QueryReferralDataProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ReferralDataData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query referralData($dataId: ID!, $referrerUserId: ID) {
			referralData(dataId: $dataId, referrerUserId: $referrerUserId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	rewards(
		props: QueryRewardsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RewardInfoData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query rewards($gameId: ID, $languageCode: String) {
			rewards(gameId: $gameId, languageCode: $languageCode) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}

	queues(
		
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'QueueData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query queues {
			queues {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
		}
	}

	gameConfigs(
		
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'GameConfigData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query gameConfigs {
			gameConfigs {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
		}
	}

	roomById(
		props: QueryRoomByIdProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedQueryOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomV3Data'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query roomById($id: ID!) {
			roomById(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		return {
			query,
			variables: props,
		}
	}
}


// CacheWriteQuery props -----------------------------------
interface QueryAvatarLayersProps {
	gameId?: ID
	type?: AvatarLayerType
}

interface QueryGiftPackProps {
	gameId: ID
	code: String
}

interface QueryAvatarLayersByIdsProps {
	ids: ID[]
}

interface QueryGameProps {
	gameId: String
}

interface QueryTopPlayersProps {
	type: TopPlayerType
	gameId: String
	skip?: Int
	limit?: Int
	includeViewer?: Boolean
}

interface QueryViewerPlayerRanksProps {
	gameId: String
}

interface QueryHasMandatoryUpdateProps {
	gameId: String
	clientVersion: String
	platform: String
}

interface QueryPlayersByStatusProps {
	gameId: String
	specialStatusKey: String
	skip?: Int
	limit?: Int
}

interface QueryJokerGamesLogProps {
	gameId: ID
	userId: ID
	skip?: Int
	limit?: Int
	statsKey?: String
	statsValueGt?: Float
	dimmensions?: JokerPlayerStatsDimmensionsInput
}

interface QueryMusicChannelsProps {
	onlyActive?: Boolean
	skip?: Int
	limit?: Int
}

interface QueryRoomsProps {
	type: String
	skip?: Int
	limit?: Int
}

interface QueryRoomProps {
	id: ID
}

interface QueryTournamentConfigProps {
	key: String
}

interface QueryTournamentGroupConfigsProps {
	gameId: String
}

interface QueryTournamentProps {
	id: ID
}

interface QueryTournamentGroupProps {
	id: ID
}

interface QueryPastTournamentGroupsProps {
	groupKey: String
}

interface QueryShopProductsProps {
	gameId: String
}

interface QueryShopProductProps {
	productKey: String
	gameId: String
}

interface QueryStoreProductsProps {
	gameId: String
	platformType: String
}

interface QueryUserProps {
	id?: ID
}

interface QueryPlayerProps {
	userId: ID
	gameId: String
}

interface QueryJokerPlayerStatsProps {
	userId: ID
	dimmensions?: JokerPlayerStatsDimmensionsInput
}

interface QueryFriendConversationProps {
	friendUserId: ID
}

interface QueryFilterFollowingUserIdsProps {
	userIds: ID[]
}

interface QueryReferralDataProps {
	dataId: ID
	referrerUserId?: ID
}

interface QueryRewardsProps {
	gameId?: ID
	languageCode?: String
}

interface QueryRoomByIdProps {
	id: ID
}


// CacheWriteQuery apis ------------------------------------
export class CacheWriteQuery {

	constructor(private client: ApolloClient<any>, private defaultOptions: GraphqlCallOptions = {} ) { }

	onlinePlayersCount(
		
		data: any,
			
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
	// build query
		const query = gql2`
		query onlinePlayersCount {
			onlinePlayersCount
		}
		`
	return this.client.writeQuery({
		query,
		data: { onlinePlayersCount: data },
		
	  })
	
	}

	avatarLayers(
		props: QueryAvatarLayersProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'AvatarLayerData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query avatarLayers($gameId: ID, $type: AvatarLayerType) {
			avatarLayers(gameId: $gameId, type: $type) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { avatarLayers: data },
		variables: props,
	  })
	
	}

	giftPack(
		props: QueryGiftPackProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'GiftPackData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query giftPack($gameId: ID!, $code: String!) {
			giftPack(gameId: $gameId, code: $code) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { giftPack: data },
		variables: props,
	  })
	
	}

	faceMaskUsagePercentage(
		
		data: any,
			
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
	// build query
		const query = gql2`
		query faceMaskUsagePercentage {
			faceMaskUsagePercentage
		}
		`
	return this.client.writeQuery({
		query,
		data: { faceMaskUsagePercentage: data },
		
	  })
	
	}

	avatarLayersByIds(
		props: QueryAvatarLayersByIdsProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'AvatarLayerData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query avatarLayersByIds($ids: [ID!]!) {
			avatarLayersByIds(ids: $ids) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { avatarLayersByIds: data },
		variables: props,
	  })
	
	}

	game(
		props: QueryGameProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'GameData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query game($gameId: String!) {
			game(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { game: data },
		variables: props,
	  })
	
	}

	games(
		
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'Game2Data'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query games {
			games {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { games: data },
		
	  })
	
	}

	topPlayers(
		props: QueryTopPlayersProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TopPlayerItemData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query topPlayers($type: TopPlayerType!, $gameId: String!, $skip: Int, $limit: Int, $includeViewer: Boolean) {
			topPlayers(type: $type, gameId: $gameId, skip: $skip, limit: $limit, includeViewer: $includeViewer) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { topPlayers: data },
		variables: props,
	  })
	
	}

	viewerPlayerRanks(
		props: QueryViewerPlayerRanksProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'PlayerRanksData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query viewerPlayerRanks($gameId: String!) {
			viewerPlayerRanks(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { viewerPlayerRanks: data },
		variables: props,
	  })
	
	}

	hasMandatoryUpdate(
		props: QueryHasMandatoryUpdateProps,
		data: any,
			
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
	// build query
		const query = gql2`
		query hasMandatoryUpdate($gameId: String!, $clientVersion: String!, $platform: String!) {
			hasMandatoryUpdate(gameId: $gameId, clientVersion: $clientVersion, platform: $platform)
		}
		`
	return this.client.writeQuery({
		query,
		data: { hasMandatoryUpdate: data },
		variables: props,
	  })
	
	}

	playersByStatus(
		props: QueryPlayersByStatusProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query playersByStatus($gameId: String!, $specialStatusKey: String!, $skip: Int, $limit: Int) {
			playersByStatus(gameId: $gameId, specialStatusKey: $specialStatusKey, skip: $skip, limit: $limit) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { playersByStatus: data },
		variables: props,
	  })
	
	}

	jokerGamesLog(
		props: QueryJokerGamesLogProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'PlayerGameLogData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query jokerGamesLog($gameId: ID!, $userId: ID!, $skip: Int, $limit: Int, $statsKey: String, $statsValueGt: Float, $dimmensions: JokerPlayerStatsDimmensionsInput) {
			jokerGamesLog(gameId: $gameId, userId: $userId, skip: $skip, limit: $limit, statsKey: $statsKey, statsValueGt: $statsValueGt, dimmensions: $dimmensions) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { jokerGamesLog: data },
		variables: props,
	  })
	
	}

	musicChannels(
		props: QueryMusicChannelsProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'MusicChannelData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query musicChannels($onlyActive: Boolean, $skip: Int, $limit: Int) {
			musicChannels(onlyActive: $onlyActive, skip: $skip, limit: $limit) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { musicChannels: data },
		variables: props,
	  })
	
	}

	rooms(
		props: QueryRoomsProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query rooms($type: String!, $skip: Int, $limit: Int) {
			rooms(type: $type, skip: $skip, limit: $limit) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { rooms: data },
		variables: props,
	  })
	
	}

	room(
		props: QueryRoomProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query room($id: ID!) {
			room(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { room: data },
		variables: props,
	  })
	
	}

	tournamentConfig(
		props: QueryTournamentConfigProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentConfigData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournamentConfig($key: String!) {
			tournamentConfig(key: $key) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { tournamentConfig: data },
		variables: props,
	  })
	
	}

	tournamentGroupConfigs(
		props: QueryTournamentGroupConfigsProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentGroupConfigData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournamentGroupConfigs($gameId: String!) {
			tournamentGroupConfigs(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { tournamentGroupConfigs: data },
		variables: props,
	  })
	
	}

	tournament(
		props: QueryTournamentProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournament($id: ID!) {
			tournament(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { tournament: data },
		variables: props,
	  })
	
	}

	tournamentGroup(
		props: QueryTournamentGroupProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentGroupData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query tournamentGroup($id: ID!) {
			tournamentGroup(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { tournamentGroup: data },
		variables: props,
	  })
	
	}

	pastTournamentGroups(
		props: QueryPastTournamentGroupsProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'TournamentGroupData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query pastTournamentGroups($groupKey: String!) {
			pastTournamentGroups(groupKey: $groupKey) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { pastTournamentGroups: data },
		variables: props,
	  })
	
	}

	shopProducts(
		props: QueryShopProductsProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ShopProductData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query shopProducts($gameId: String!) {
			shopProducts(gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { shopProducts: data },
		variables: props,
	  })
	
	}

	shopProduct(
		props: QueryShopProductProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ShopProductData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query shopProduct($productKey: String!, $gameId: String!) {
			shopProduct(productKey: $productKey, gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { shopProduct: data },
		variables: props,
	  })
	
	}

	storeProducts(
		props: QueryStoreProductsProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'StoreProductData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query storeProducts($gameId: String!, $platformType: String!) {
			storeProducts(gameId: $gameId, platformType: $platformType) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { storeProducts: data },
		variables: props,
	  })
	
	}

	viewer(
		
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query viewer {
			viewer {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { viewer: data },
		
	  })
	
	}

	user(
		props: QueryUserProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query user($id: ID) {
			user(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { user: data },
		variables: props,
	  })
	
	}

	player(
		props: QueryPlayerProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'PlayerData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query player($userId: ID!, $gameId: String!) {
			player(userId: $userId, gameId: $gameId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { player: data },
		variables: props,
	  })
	
	}

	jokerPlayerStats(
		props: QueryJokerPlayerStatsProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'JokerPlayerStatsData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query jokerPlayerStats($userId: ID!, $dimmensions: JokerPlayerStatsDimmensionsInput) {
			jokerPlayerStats(userId: $userId, dimmensions: $dimmensions) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { jokerPlayerStats: data },
		variables: props,
	  })
	
	}

	friendConversation(
		props: QueryFriendConversationProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ConversationMessageData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query friendConversation($friendUserId: ID!) {
			friendConversation(friendUserId: $friendUserId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { friendConversation: data },
		variables: props,
	  })
	
	}

	filterFollowingUserIds(
		props: QueryFilterFollowingUserIdsProps,
		data: any,
			
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
	// build query
		const query = gql2`
		query filterFollowingUserIds($userIds: [ID!]!) {
			filterFollowingUserIds(userIds: $userIds)
		}
		`
	return this.client.writeQuery({
		query,
		data: { filterFollowingUserIds: data },
		variables: props,
	  })
	
	}

	referralData(
		props: QueryReferralDataProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'ReferralDataData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query referralData($dataId: ID!, $referrerUserId: ID) {
			referralData(dataId: $dataId, referrerUserId: $referrerUserId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { referralData: data },
		variables: props,
	  })
	
	}

	rewards(
		props: QueryRewardsProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RewardInfoData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query rewards($gameId: ID, $languageCode: String) {
			rewards(gameId: $gameId, languageCode: $languageCode) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { rewards: data },
		variables: props,
	  })
	
	}

	queues(
		
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'QueueData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query queues {
			queues {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { queues: data },
		
	  })
	
	}

	gameConfigs(
		
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'GameConfigData'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query gameConfigs {
			gameConfigs {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { gameConfigs: data },
		
	  })
	
	}

	roomById(
		props: QueryRoomByIdProps,
		data: any,
			fragment: string | DocumentNode,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomV3Data'

		const finishedFragment = fragment
		
		// build query
		const query = gql2`
		query roomById($id: ID!) {
			roomById(id: $id) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
	return this.client.writeQuery({
		query,
		data: { roomById: data },
		variables: props,
	  })
	
	}
}


// Mutation props -----------------------------------
interface MutationSaveAvatarConfigProps {
	avatarConfig: AvatarConfigInput
}

interface MutationOpenGiftBoxProps {
	giftBoxId: ID
}

interface MutationMarkAvatarLayerUsedProps {
	userAvatarLayerId: ID
}

interface MutationStartGameProps {
	gameId: ID
	gameSecret: String
	roomReferenceId: ID
	userIds: ID[]
}

interface MutationFinishGameProps {
	gameId: ID
	gameSecret: String
	roomReferenceId: ID
	roomData?: JSON
	players: PlayerRatingChange[]
	actions: JSON[]
	gameServerVersion: String
	isFullGame: Boolean
	playerInteractions?: JSON[]
	playerSentEmotions?: JSON[]
}

interface MutationSavePlayerDataProps {
	userId: ID
	gameId: String
	gameSecret: String
	data: JSON
}

interface MutationSavePlayerAppStatusProps {
	gameId: String
	isActive: Boolean
	notificationStatus?: AppNotificationStatusInput
}

interface MutationSavePlayerPushTokenProps {
	gameId: String
	pushNotificationEnabled: Boolean
	pushNotificationUserId?: String
	pushNotificationToken?: String
}

interface MutationSavePlayerDataItemProps {
	gameId: String
	dataKey: String
	dataValue: JSON
}

interface MutationSavePlayerNotificationConfigProps {
	gameId: String
	platformType: String
	notificationUserId?: String
	optOutItems: NotificationOptOutItemInput[]
}

interface MutationUpdateGameRoomsProgressProps {
	gameId: ID
	gameSecret: String
	items: GameRoomProgressInput[]
}

interface MutationReportPlayersProps {
	gameId: ID
	reportType: String
	roomId: ID
	userIds: ID[]
}

interface MutationBlockPlayerProps {
	gameId: ID
	blockUserId: ID
	roomId?: ID
}

interface MutationSaveMusicChannelProps {
	id?: ID
	data: MusicChannelInput
}

interface MutationSaveMusicChannelStreamProps {
	musicChannelId: ID
	musicStreamId?: ID
	data: MusicChannelStreamInput
}

interface MutationSelectMusicChannelStreamProps {
	musicChannelId: ID
	musicStreamId: ID
}

interface MutationSetMusicChannelOnlineStatusProps {
	musicChannelId: ID
	musicStreamId: ID
	isOnline: Boolean
	reason?: String
}

interface MutationSaveSongProps {
	musicChannelId: ID
	musicStreamId: ID
	song?: SongInput
}

interface MutationFavoriteMusicChannelProps {
	musicChannelId: ID
	isFavorite: Boolean
}

interface MutationFavoriteSongProps {
	songId: ID
	isFavorite: Boolean
}

interface MutationCreateRoomProps {
	data: RoomInput
}

interface MutationJoinRoomProps {
	roomId: ID
	seatIndex?: Int
	actionTime?: Float
}

interface MutationJoinRoomByPasscodeProps {
	passcode: String
}

interface MutationLeaveRoomProps {
	roomId: ID
}

interface MutationLeaveAllRoomsProps {
	type?: String
}

interface MutationKickUserFromRoomProps {
	roomId: ID
	kickedUserId: ID
}

interface MutationRoomConfirmationProps {
	roomId: ID
	isConfirmed: Boolean
	source?: String
}

interface MutationSendChatMessageProps {
	roomId: ID
	message: String
}

interface MutationSendChatEmotionProps {
	roomId: ID
	message: String
}

interface MutationRequestRoomMatchProps {
	type: String
}

interface MutationCancelRoomMatchProps {
	type: String
}

interface MutationRequestRoomInfoProps {
	roomId: ID
}

interface MutationOpenRoomProps {
	roomId: ID
}

interface MutationUserConfirmationAnswerProps {
	entityId: ID
	isConfirmed: Boolean
	source?: String
}

interface MutationJoinChannelProps {
	gameId: ID
	channelKey: String
}

interface MutationLeaveChannelProps {
	gameId: ID
	channelKey: String
}

interface MutationLeaveTournamentProps {
	gameId: ID
	tournamentId: ID
}

interface MutationFinishTournamentGroupProps {
	id: ID
}

interface MutationVerifyPurchaseProps {
	userId: ID
	productId: ID
	storeType: StoreType
	transaction: JSON
}

interface MutationProcessPurchaseProps {
	productId: ID
	storeType: StoreType
	transaction: JSON
	isRestore?: Boolean
}

interface MutationProcessTokenPurchaseProps {
	productKey: String
	platformType: String
	gameId: String
	price: Int
}

interface MutationCreateStripeCustomerSessionProps {
	returnUrl: String
}

interface MutationCreateStripeCheckoutSessionProps {
	storeProductId: ID
	gameId: String
	platformType: String
	successUrl: String
	cancelUrl: String
	data?: JSON
}

interface MutationLoginByAuthTokenProps {
	authToken: String
	nickname?: String
	deviceInfo?: JSON
	tag?: String
	languageCode?: String
	legacyUserId?: String
	legacyUserEmail?: String
	promoCode?: String
}

interface MutationLoginByEmailProps {
	email: String
	deviceInfo?: JSON
	platformType?: String
	oldAuthToken?: String
}

interface MutationSignOutProps {
	gameId: ID
	authToken?: String
}

interface MutationChangeLanguageProps {
	code: String
}

interface MutationChangeNicknameProps {
	nickname: String
}

interface MutationValidateNicknameProps {
	nickname: String
}

interface MutationCheckUserEmailProps {
	email: String
}

interface MutationSetUserEmailProps {
	email: String
}

interface MutationStayHomeProps {
	type: String
}

interface MutationRegisterClientErrorProps {
	gameId: ID
	detail: JSON
	groupId?: String
}

interface MutationSetActiveSpecialStatusProps {
	gameId: ID
	specialStatusKey?: String
}

interface MutationSaveGameThemeProps {
	gameId: ID
	theme: String
	themeOptions?: JSON
}

interface MutationEmailVerificationRequestProps {
	email: String
	name: String
	templateVersion?: String
	gameId?: String
}

interface MutationEmailVerificationCompleteProps {
	email: String
	code: String
}

interface MutationClaimRewardProps {
	rewardId: String
}

interface MutationDisconnectDeviceProps {
	id: ID
}

interface MutationSubscribeTournamentProps {
	gameId: ID
	tournamentKey: String
}

interface MutationUnsubscribeTournamentProps {
	gameId: ID
	tournamentKey: String
}

interface MutationSetIncognitoModeProps {
	isActive?: Boolean
}

interface MutationUnblockPlayerProps {
	userId: ID
}

interface MutationFixHonorRateProps {
	gameId: ID
	payBy: PayByMode
}

interface MutationSignDataProps {
	data: String
}

interface MutationSignInByWalletProps {
	walletType: String
	publicKey: String
	date: DateTime
	signature: String
	deviceInfo: JSON
	platformType: String
}

interface MutationDisconnectWalletProps {
	publicKey: String
	date: DateTime
	signature: String
}


// Mutation apis ------------------------------------
export class Mutation {

	constructor(private client: ApolloClient<any>, private defaultOptions: GraphqlCallOptions = {} ) { }

	_(
		
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation _ {
			_
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
		}).then(result => getResultData<Boolean>(result, '_'))
	}

	saveAvatarConfig(
		props: MutationSaveAvatarConfigProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation saveAvatarConfig($avatarConfig: AvatarConfigInput!) {
			saveAvatarConfig(avatarConfig: $avatarConfig) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<User>(result, 'saveAvatarConfig'))
	}

	openGiftBox(
		props: MutationOpenGiftBoxProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'OpenedGiftBoxResultData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation openGiftBox($giftBoxId: ID!) {
			openGiftBox(giftBoxId: $giftBoxId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<OpenedGiftBoxResult>(result, 'openGiftBox'))
	}

	markAvatarLayerUsed(
		props: MutationMarkAvatarLayerUsedProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation markAvatarLayerUsed($userAvatarLayerId: ID!) {
			markAvatarLayerUsed(userAvatarLayerId: $userAvatarLayerId)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'markAvatarLayerUsed'))
	}

	startGame(
		props: MutationStartGameProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation startGame($gameId: ID!, $gameSecret: String!, $roomReferenceId: ID!, $userIds: [ID!]!) {
			startGame(gameId: $gameId, gameSecret: $gameSecret, roomReferenceId: $roomReferenceId, userIds: $userIds)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'startGame'))
	}

	finishGame(
		props: MutationFinishGameProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'PostGameResultData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation finishGame($gameId: ID!, $gameSecret: String!, $roomReferenceId: ID!, $roomData: JSON, $players: [PlayerRatingChange!]!, $actions: [JSON!]!, $gameServerVersion: String!, $isFullGame: Boolean!, $playerInteractions: [JSON!], $playerSentEmotions: [JSON!]) {
			finishGame(gameId: $gameId, gameSecret: $gameSecret, roomReferenceId: $roomReferenceId, roomData: $roomData, players: $players, actions: $actions, gameServerVersion: $gameServerVersion, isFullGame: $isFullGame, playerInteractions: $playerInteractions, playerSentEmotions: $playerSentEmotions) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<PostGameResult>(result, 'finishGame'))
	}

	savePlayerData(
		props: MutationSavePlayerDataProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'PlayerData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation savePlayerData($userId: ID!, $gameId: String!, $gameSecret: String!, $data: JSON!) {
			savePlayerData(userId: $userId, gameId: $gameId, gameSecret: $gameSecret, data: $data) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Player>(result, 'savePlayerData'))
	}

	savePlayerAppStatus(
		props: MutationSavePlayerAppStatusProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation savePlayerAppStatus($gameId: String!, $isActive: Boolean!, $notificationStatus: AppNotificationStatusInput) {
			savePlayerAppStatus(gameId: $gameId, isActive: $isActive, notificationStatus: $notificationStatus)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'savePlayerAppStatus'))
	}

	savePlayerPushToken(
		props: MutationSavePlayerPushTokenProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation savePlayerPushToken($gameId: String!, $pushNotificationEnabled: Boolean!, $pushNotificationUserId: String, $pushNotificationToken: String) {
			savePlayerPushToken(gameId: $gameId, pushNotificationEnabled: $pushNotificationEnabled, pushNotificationUserId: $pushNotificationUserId, pushNotificationToken: $pushNotificationToken)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'savePlayerPushToken'))
	}

	savePlayerDataItem(
		props: MutationSavePlayerDataItemProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation savePlayerDataItem($gameId: String!, $dataKey: String!, $dataValue: JSON!) {
			savePlayerDataItem(gameId: $gameId, dataKey: $dataKey, dataValue: $dataValue)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'savePlayerDataItem'))
	}

	savePlayerNotificationConfig(
		props: MutationSavePlayerNotificationConfigProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation savePlayerNotificationConfig($gameId: String!, $platformType: String!, $notificationUserId: String, $optOutItems: [NotificationOptOutItemInput!]!) {
			savePlayerNotificationConfig(gameId: $gameId, platformType: $platformType, notificationUserId: $notificationUserId, optOutItems: $optOutItems)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'savePlayerNotificationConfig'))
	}

	updateGameRoomsProgress(
		props: MutationUpdateGameRoomsProgressProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation updateGameRoomsProgress($gameId: ID!, $gameSecret: String!, $items: [GameRoomProgressInput!]!) {
			updateGameRoomsProgress(gameId: $gameId, gameSecret: $gameSecret, items: $items)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'updateGameRoomsProgress'))
	}

	reportPlayers(
		props: MutationReportPlayersProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation reportPlayers($gameId: ID!, $reportType: String!, $roomId: ID!, $userIds: [ID!]!) {
			reportPlayers(gameId: $gameId, reportType: $reportType, roomId: $roomId, userIds: $userIds)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'reportPlayers'))
	}

	blockPlayer(
		props: MutationBlockPlayerProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation blockPlayer($gameId: ID!, $blockUserId: ID!, $roomId: ID) {
			blockPlayer(gameId: $gameId, blockUserId: $blockUserId, roomId: $roomId)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'blockPlayer'))
	}

	saveMusicChannel(
		props: MutationSaveMusicChannelProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'MusicChannelData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation saveMusicChannel($id: ID, $data: MusicChannelInput!) {
			saveMusicChannel(id: $id, data: $data) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<MusicChannel>(result, 'saveMusicChannel'))
	}

	saveMusicChannelStream(
		props: MutationSaveMusicChannelStreamProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'MusicChannelData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation saveMusicChannelStream($musicChannelId: ID!, $musicStreamId: ID, $data: MusicChannelStreamInput!) {
			saveMusicChannelStream(musicChannelId: $musicChannelId, musicStreamId: $musicStreamId, data: $data) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<MusicChannel>(result, 'saveMusicChannelStream'))
	}

	selectMusicChannelStream(
		props: MutationSelectMusicChannelStreamProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'MusicChannelData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation selectMusicChannelStream($musicChannelId: ID!, $musicStreamId: ID!) {
			selectMusicChannelStream(musicChannelId: $musicChannelId, musicStreamId: $musicStreamId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<MusicChannel>(result, 'selectMusicChannelStream'))
	}

	setMusicChannelOnlineStatus(
		props: MutationSetMusicChannelOnlineStatusProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation setMusicChannelOnlineStatus($musicChannelId: ID!, $musicStreamId: ID!, $isOnline: Boolean!, $reason: String) {
			setMusicChannelOnlineStatus(musicChannelId: $musicChannelId, musicStreamId: $musicStreamId, isOnline: $isOnline, reason: $reason)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'setMusicChannelOnlineStatus'))
	}

	saveSong(
		props: MutationSaveSongProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'SongData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation saveSong($musicChannelId: ID!, $musicStreamId: ID!, $song: SongInput) {
			saveSong(musicChannelId: $musicChannelId, musicStreamId: $musicStreamId, song: $song) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Song>(result, 'saveSong'))
	}

	favoriteMusicChannel(
		props: MutationFavoriteMusicChannelProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'MusicChannelData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation favoriteMusicChannel($musicChannelId: ID!, $isFavorite: Boolean!) {
			favoriteMusicChannel(musicChannelId: $musicChannelId, isFavorite: $isFavorite) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<MusicChannel>(result, 'favoriteMusicChannel'))
	}

	favoriteSong(
		props: MutationFavoriteSongProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'SongData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation favoriteSong($songId: ID!, $isFavorite: Boolean!) {
			favoriteSong(songId: $songId, isFavorite: $isFavorite) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Song>(result, 'favoriteSong'))
	}

	requestAutoMatchRoomInfo(
		
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation requestAutoMatchRoomInfo {
			requestAutoMatchRoomInfo
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
		}).then(result => getResultData<Boolean>(result, 'requestAutoMatchRoomInfo'))
	}

	createRoom(
		props: MutationCreateRoomProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation createRoom($data: RoomInput!) {
			createRoom(data: $data) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Room>(result, 'createRoom'))
	}

	joinRoom(
		props: MutationJoinRoomProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation joinRoom($roomId: ID!, $seatIndex: Int, $actionTime: Float) {
			joinRoom(roomId: $roomId, seatIndex: $seatIndex, actionTime: $actionTime) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Room>(result, 'joinRoom'))
	}

	joinRoomByPasscode(
		props: MutationJoinRoomByPasscodeProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation joinRoomByPasscode($passcode: String!) {
			joinRoomByPasscode(passcode: $passcode) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Room>(result, 'joinRoomByPasscode'))
	}

	leaveRoom(
		props: MutationLeaveRoomProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation leaveRoom($roomId: ID!) {
			leaveRoom(roomId: $roomId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Room>(result, 'leaveRoom'))
	}

	leaveAllRooms(
		props: MutationLeaveAllRoomsProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation leaveAllRooms($type: String) {
			leaveAllRooms(type: $type) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Room[]>(result, 'leaveAllRooms'))
	}

	kickUserFromRoom(
		props: MutationKickUserFromRoomProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation kickUserFromRoom($roomId: ID!, $kickedUserId: ID!) {
			kickUserFromRoom(roomId: $roomId, kickedUserId: $kickedUserId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Room>(result, 'kickUserFromRoom'))
	}

	roomConfirmation(
		props: MutationRoomConfirmationProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation roomConfirmation($roomId: ID!, $isConfirmed: Boolean!, $source: String) {
			roomConfirmation(roomId: $roomId, isConfirmed: $isConfirmed, source: $source) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Room>(result, 'roomConfirmation'))
	}

	sendChatMessage(
		props: MutationSendChatMessageProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation sendChatMessage($roomId: ID!, $message: String!) {
			sendChatMessage(roomId: $roomId, message: $message) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Room>(result, 'sendChatMessage'))
	}

	sendChatEmotion(
		props: MutationSendChatEmotionProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation sendChatEmotion($roomId: ID!, $message: String!) {
			sendChatEmotion(roomId: $roomId, message: $message) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Room>(result, 'sendChatEmotion'))
	}

	requestRoomMatch(
		props: MutationRequestRoomMatchProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomMatchRequestResultData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation requestRoomMatch($type: String!) {
			requestRoomMatch(type: $type) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<RoomMatchRequestResult>(result, 'requestRoomMatch'))
	}

	cancelRoomMatch(
		props: MutationCancelRoomMatchProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation cancelRoomMatch($type: String!) {
			cancelRoomMatch(type: $type)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'cancelRoomMatch'))
	}

	requestRoomInfo(
		props: MutationRequestRoomInfoProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation requestRoomInfo($roomId: ID!) {
			requestRoomInfo(roomId: $roomId)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'requestRoomInfo'))
	}

	openRoom(
		props: MutationOpenRoomProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'RoomData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation openRoom($roomId: ID!) {
			openRoom(roomId: $roomId) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Room>(result, 'openRoom'))
	}

	userConfirmationAnswer(
		props: MutationUserConfirmationAnswerProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation userConfirmationAnswer($entityId: ID!, $isConfirmed: Boolean!, $source: String) {
			userConfirmationAnswer(entityId: $entityId, isConfirmed: $isConfirmed, source: $source)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'userConfirmationAnswer'))
	}

	joinChannel(
		props: MutationJoinChannelProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation joinChannel($gameId: ID!, $channelKey: String!) {
			joinChannel(gameId: $gameId, channelKey: $channelKey)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'joinChannel'))
	}

	leaveChannel(
		props: MutationLeaveChannelProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation leaveChannel($gameId: ID!, $channelKey: String!) {
			leaveChannel(gameId: $gameId, channelKey: $channelKey)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'leaveChannel'))
	}

	leaveTournament(
		props: MutationLeaveTournamentProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation leaveTournament($gameId: ID!, $tournamentId: ID!) {
			leaveTournament(gameId: $gameId, tournamentId: $tournamentId)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'leaveTournament'))
	}

	finishTournamentGroup(
		props: MutationFinishTournamentGroupProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation finishTournamentGroup($id: ID!) {
			finishTournamentGroup(id: $id)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'finishTournamentGroup'))
	}

	verifyPurchase(
		props: MutationVerifyPurchaseProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation verifyPurchase($userId: ID!, $productId: ID!, $storeType: StoreType!, $transaction: JSON!) {
			verifyPurchase(userId: $userId, productId: $productId, storeType: $storeType, transaction: $transaction)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<JSON>(result, 'verifyPurchase'))
	}

	processPurchase(
		props: MutationProcessPurchaseProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation processPurchase($productId: ID!, $storeType: StoreType!, $transaction: JSON!, $isRestore: Boolean) {
			processPurchase(productId: $productId, storeType: $storeType, transaction: $transaction, isRestore: $isRestore)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<JSON>(result, 'processPurchase'))
	}

	processTokenPurchase(
		props: MutationProcessTokenPurchaseProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation processTokenPurchase($productKey: String!, $platformType: String!, $gameId: String!, $price: Int!) {
			processTokenPurchase(productKey: $productKey, platformType: $platformType, gameId: $gameId, price: $price)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'processTokenPurchase'))
	}

	createStripeCustomerSession(
		props: MutationCreateStripeCustomerSessionProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation createStripeCustomerSession($returnUrl: String!) {
			createStripeCustomerSession(returnUrl: $returnUrl)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<String>(result, 'createStripeCustomerSession'))
	}

	createStripeCheckoutSession(
		props: MutationCreateStripeCheckoutSessionProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation createStripeCheckoutSession($storeProductId: ID!, $gameId: String!, $platformType: String!, $successUrl: String!, $cancelUrl: String!, $data: JSON) {
			createStripeCheckoutSession(storeProductId: $storeProductId, gameId: $gameId, platformType: $platformType, successUrl: $successUrl, cancelUrl: $cancelUrl, data: $data)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<String>(result, 'createStripeCheckoutSession'))
	}

	loginByAuthToken(
		props: MutationLoginByAuthTokenProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'AuthResultData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation loginByAuthToken($authToken: String!, $nickname: String, $deviceInfo: JSON, $tag: String, $languageCode: String, $legacyUserId: String, $legacyUserEmail: String, $promoCode: String) {
			loginByAuthToken(authToken: $authToken, nickname: $nickname, deviceInfo: $deviceInfo, tag: $tag, languageCode: $languageCode, legacyUserId: $legacyUserId, legacyUserEmail: $legacyUserEmail, promoCode: $promoCode) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<AuthResult>(result, 'loginByAuthToken'))
	}

	loginByEmail(
		props: MutationLoginByEmailProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'AuthResultData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation loginByEmail($email: String!, $deviceInfo: JSON, $platformType: String, $oldAuthToken: String) {
			loginByEmail(email: $email, deviceInfo: $deviceInfo, platformType: $platformType, oldAuthToken: $oldAuthToken) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<AuthResult>(result, 'loginByEmail'))
	}

	signOut(
		props: MutationSignOutProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation signOut($gameId: ID!, $authToken: String) {
			signOut(gameId: $gameId, authToken: $authToken)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'signOut'))
	}

	changeLanguage(
		props: MutationChangeLanguageProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation changeLanguage($code: String!) {
			changeLanguage(code: $code) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<User>(result, 'changeLanguage'))
	}

	changeNickname(
		props: MutationChangeNicknameProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation changeNickname($nickname: String!) {
			changeNickname(nickname: $nickname) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<User>(result, 'changeNickname'))
	}

	validateNickname(
		props: MutationValidateNicknameProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation validateNickname($nickname: String!) {
			validateNickname(nickname: $nickname)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'validateNickname'))
	}

	checkUserEmail(
		props: MutationCheckUserEmailProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation checkUserEmail($email: String!) {
			checkUserEmail(email: $email)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'checkUserEmail'))
	}

	setUserEmail(
		props: MutationSetUserEmailProps,
		
			fragment: string | DocumentNode,
			options?: GraphqlCallOptions & FragmentOptions & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
		const fragmentName = mergedOptions.fragmentName || getFirstFragmentName(fragment) || 'UserData'

		const finishedFragment = fragment
		
		// build query
		const mutation = gql2`
		mutation setUserEmail($email: String!) {
			setUserEmail(email: $email) {
				...${fragmentName}
			}
		}

		${finishedFragment}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<User>(result, 'setUserEmail'))
	}

	stayHome(
		props: MutationStayHomeProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation stayHome($type: String!) {
			stayHome(type: $type)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'stayHome'))
	}

	registerClientError(
		props: MutationRegisterClientErrorProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation registerClientError($gameId: ID!, $detail: JSON!, $groupId: String) {
			registerClientError(gameId: $gameId, detail: $detail, groupId: $groupId)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'registerClientError'))
	}

	setActiveSpecialStatus(
		props: MutationSetActiveSpecialStatusProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation setActiveSpecialStatus($gameId: ID!, $specialStatusKey: String) {
			setActiveSpecialStatus(gameId: $gameId, specialStatusKey: $specialStatusKey)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'setActiveSpecialStatus'))
	}

	saveGameTheme(
		props: MutationSaveGameThemeProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation saveGameTheme($gameId: ID!, $theme: String!, $themeOptions: JSON) {
			saveGameTheme(gameId: $gameId, theme: $theme, themeOptions: $themeOptions)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'saveGameTheme'))
	}

	emailVerificationRequest(
		props: MutationEmailVerificationRequestProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation emailVerificationRequest($email: String!, $name: String!, $templateVersion: String, $gameId: String) {
			emailVerificationRequest(email: $email, name: $name, templateVersion: $templateVersion, gameId: $gameId)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'emailVerificationRequest'))
	}

	emailVerificationComplete(
		props: MutationEmailVerificationCompleteProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation emailVerificationComplete($email: String!, $code: String!) {
			emailVerificationComplete(email: $email, code: $code)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'emailVerificationComplete'))
	}

	claimReward(
		props: MutationClaimRewardProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation claimReward($rewardId: String!) {
			claimReward(rewardId: $rewardId)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'claimReward'))
	}

	disconnectDevice(
		props: MutationDisconnectDeviceProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation disconnectDevice($id: ID!) {
			disconnectDevice(id: $id)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'disconnectDevice'))
	}

	subscribeTournament(
		props: MutationSubscribeTournamentProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation subscribeTournament($gameId: ID!, $tournamentKey: String!) {
			subscribeTournament(gameId: $gameId, tournamentKey: $tournamentKey)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'subscribeTournament'))
	}

	unsubscribeTournament(
		props: MutationUnsubscribeTournamentProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation unsubscribeTournament($gameId: ID!, $tournamentKey: String!) {
			unsubscribeTournament(gameId: $gameId, tournamentKey: $tournamentKey)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'unsubscribeTournament'))
	}

	setIncognitoMode(
		props: MutationSetIncognitoModeProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation setIncognitoMode($isActive: Boolean) {
			setIncognitoMode(isActive: $isActive)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'setIncognitoMode'))
	}

	unblockPlayer(
		props: MutationUnblockPlayerProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation unblockPlayer($userId: ID!) {
			unblockPlayer(userId: $userId)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'unblockPlayer'))
	}

	fixHonorRate(
		props: MutationFixHonorRateProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation fixHonorRate($gameId: ID!, $payBy: PayByMode!) {
			fixHonorRate(gameId: $gameId, payBy: $payBy)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'fixHonorRate'))
	}

	signData(
		props: MutationSignDataProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation signData($data: String!) {
			signData(data: $data)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<String>(result, 'signData'))
	}

	signInByWallet(
		props: MutationSignInByWalletProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation signInByWallet($walletType: String!, $publicKey: String!, $date: DateTime!, $signature: String!, $deviceInfo: JSON!, $platformType: String!) {
			signInByWallet(walletType: $walletType, publicKey: $publicKey, date: $date, signature: $signature, deviceInfo: $deviceInfo, platformType: $platformType)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<String>(result, 'signInByWallet'))
	}

	disconnectWallet(
		props: MutationDisconnectWalletProps,
		
			
			options?: GraphqlCallOptions  & OmittedMutationOptions,
	) {
	
		const mergedOptions = {
			...<any>this.defaultOptions,
			...options,
		}

		
	// build query
		const mutation = gql2`
		mutation disconnectWallet($publicKey: String!, $date: DateTime!, $signature: String!) {
			disconnectWallet(publicKey: $publicKey, date: $date, signature: $signature)
		}
		`
		// apollo call
		return this.client.mutate({
			...mergedOptions,
			mutation,
			variables: props,
		}).then(result => getResultData<Boolean>(result, 'disconnectWallet'))
	}
}


class SubscriptionDocument { }

// helper types
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type OmittedQueryOptions = Omit<Partial<QueryOptions<OperationVariables>>, 'query' | 'variables'>
type OmittedWatchQueryOptions = Omit<Partial<WatchQueryOptions<OperationVariables>>, 'variables' | 'query'>

type SubscribeToMoreOptions<T> = {
	subscribeToMore?:
	  {
		graphqlDocument: { document: any, variables?: any } |
			((subscription: SubscriptionDocument) => { document: any, variables?: any }),
		updateQuery: UpdateQueryFn<T, any, any>
	  }[]
}



type OmittedMutationOptions = Omit<Partial<MutationOptions<OperationVariables>>, 'mutation' | 'variables'>



interface FragmentOptions {
	fragmentName?: string
}

interface GraphqlCallOptions {
	fetchPolicy?: FetchPolicy
	errorPolicy?: ErrorPolicy
}

interface DefaultOptions {
	query?: GraphqlCallOptions
	watchQuery?: GraphqlCallOptions
	mutation?: Omit<GraphqlCallOptions, 'fetchPolicy'>
	
}

export interface Client {
	query: Query
	watchQuery: WatchQuery
	refetchQuery: RefetchQuery
	cacheWriteQuery: CacheWriteQuery
	mutation: Mutation
	
}

export default function (client: ApolloClient<any>, defaultOptions: DefaultOptions = {}): Client {
	
	return {
		query: new Query(client, defaultOptions.query || {}),
		watchQuery: new WatchQuery(client, defaultOptions.query || {}, null),
		refetchQuery: new RefetchQuery(client, defaultOptions.query || {}),
		cacheWriteQuery: new CacheWriteQuery(client, defaultOptions.query || {}),
		mutation: new Mutation(client, defaultOptions.mutation || {}),
		
	}
}

function fixObservable(obs: any) {
	(obs as any)[observable] = () => obs
	return obs
}

function getResultData<T>(result: any, dataFieldName: any) {
	// if error, throw it
	if (result.errors) {
		throw new Error(<any>result.errors)
	}

	if (!result.data) {
		return <T><any>null
	}

	// cast the result and return (need any for scalar types, to avoid compilation error)
	return <T><any>result.data[dataFieldName]
}

function getFirstFragmentName(fragmentParam: string | Object | undefined) {

  if (typeof fragmentParam !== 'object') { return }
  const fragment = fragmentParam as any

	if (
		!fragment ||
		!fragment['definitions'] ||
		!fragment['definitions'][0] ||
		!fragment['definitions'][0].name ||
		!fragment['definitions'][0].name.value
	) { return }

	return fragment['definitions'][0].name.value
}
