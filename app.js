const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

//app.get('/', (req, res) => res.send('Hello World!') ) → 삭제 필요
app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/',function(req,res){
res.sendFile(path.join(__dirname+'/index.html'));
});
router.get('/subview',function(req,res){
    res.sendFile(path.join(__dirname +'/views/subview.html'));
    });
    router.get('/external',function(req,res){
        res.sendFile(path.join(__dirname+'/views/external.html'));
        });
        router.get('/sub1',function(req,res){
            res.sendFile(path.join(__dirname+'/views/sub1.html'));
            });
            router.get('/sub2',function(req,res){
                res.sendFile(path.join(__dirname+'/views/sub2.html'));
                });
                router.get('/sub3',function(req,res){
                    res.sendFile(path.join(__dirname+'/views/sub3.html'));
                    });
                    router.get('/sub4',function(req,res){
                        res.sendFile(path.join(__dirname+'/views/sub4.html'));
                        });
                        router.get('/sub5',function(req,res){
                            res.sendFile(path.join(__dirname+'/views/sub5.html'));
                            });
app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))