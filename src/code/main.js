const fs = require('fs')
exports.dynamicReadFile = (req,res)=>{
    try{

    const module_name = req.params.module_name
    const file_name = req.params.file_name
    const file_path = `src/ui-config/specification/${module_name}/${file_name}.json`
    if (fs.existsSync(file_path)) {
        console.log('File Found')
        const file_content = JSON.parse(fs.readFileSync(file_path,'utf-8') )
        res.status(200).json(file_content)
    }
    else{
        console.log('File Not Found')  
        res.status(400).json("File not found")
    }
    
    }catch(e){

        res.status(500).send(e)
    }
}