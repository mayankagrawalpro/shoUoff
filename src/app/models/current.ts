
export class Current {
    adminData:any;
    adminPageFlag:any;
    loginData:any;
    sectionAddFlag:any;
    categoryAddFlag:any;
    SubcategoryFlag:any;
    currentId:any;
    actionFlag:any;
    currentSectionName:any;
    currentContentData:any;
    currentLanguage:any;
    suggestedString=[]
    loadingFlag:boolean=false

    constructor(public leadsFilter?: string) {
    }
}
