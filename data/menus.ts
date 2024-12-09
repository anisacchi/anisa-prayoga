import {
	Chat,
	ChatFill,
	Hearts,
	HeartsFill,
	Home,
	HomeFill,
	Panorama,
	PanoramaFill,
	WeddingArch,
	WeddingArchFill,
} from '@/components/icons';

export const menus =
	[
		{
			"name": "Home",
			"id": "home",
			"icon": {
				"line": Home,
				"fill": HomeFill
			}
		},
		{
			"name": "Couple",
			"id": "couple",
			"icon": {
				"line": Hearts,
				"fill": HeartsFill
			}
		},
		{
			"name": "Event",
			"id": "schedule",
			"icon": {
				"line": WeddingArch,
				"fill": WeddingArchFill
			}
		},
		{
			"name": "Moments",
			"id": "moments",
			"icon": {
				"line": Panorama,
				"fill": PanoramaFill
			}
		}
	]