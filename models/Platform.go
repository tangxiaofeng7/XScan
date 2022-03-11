package models

type Platform struct {
	//*Model
	ID       int    `json:"id"`
	Platform string `json:"platform"`
	Username string `json:"username"`
	Password string `json:"password"`
}

func GetPlatform() (platform []Platform) {
	db.Find(&platform)
	return
}

func EditPaltform(id int, data interface{}) bool {
	db.Model(&Platform{}).Where("id = ?", id).Updates(data)
	return true
}

func GetPlat(plat string) (string, string, bool) {
	var Platform Platform

	db.Model(Platform).Where("platform = ?", plat).Find(&Platform)

	if Platform.ID > 0 {
		return Platform.Username, Platform.Password, true
	}

	return Platform.Username, Platform.Password, false
}
