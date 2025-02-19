class HomePage extends playwrightActions{
    learnMoreButton: any 
    availableCarsButton: any 
   
     
            
              this.learnMoreButton = this.page.locator("//span[@id='CI2U8EIPRDmNVTVRAr4P5Q']/span[1]/span[1]")
              this.availableCarsButton = this.page.locator("//a[@id='Ow4-zwttSfizMWUhjYxgxA']/span/span[1]")
          }