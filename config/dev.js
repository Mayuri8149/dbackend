var config = {
    "PORT" : 27017,
    "MONGODB_USERNAME": encodeURIComponent("monuser"),
    "MONGODB_PASSWORD": encodeURIComponent("ayavamas"),
    "MONGODB_DBNAME": "tracechain_dev_test",
    "PRIVATE_KEY": "gadiaagebadikinahi",
    "API_ENDPOINT": "http://40.77.9.92/:3000/"
};
//config.MONGODB_URI = `mongodb://localhost/${config.MONGODB_DBNAME}?retryWrites=true&w=majority&poolSize=4`
config.MONGODB_URI = `mongodb+srv://snapcert:Blockchain456@cluster0-5lmfv.mongodb.net/${config.MONGODB_DBNAME}?retryWrites=true&w=majority`
config.URI = 'http://52.172.252.154:80/#/'
config.BLOCKCHAIN_URI1 = 'http://20.102.76.133:4000/'
config.BLOCKCHAIN_URI = 'http://40.80.90.217:4000/'
config.GENPATH_URI = 'http://52.172.252.154:3000/'
config.MAILURI = 'https://dev.tracechain.io/#/'
config.awsDetails = { 
    "accessKeyId": "AKIAI2I63MAWSDR2SQ7Q", 
    "secretAccessKey": "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", 
    "region": "ap-south-1",
    "bucket": "snapcerttest",
    "signatureVersion": "v4",
    "url": "https://snapcerttest.s3.ap-south-1.amazonaws.com/",
    "emailregion": "eu-west-1",
}
config.recaptcha = { 
    secretkey : "6LeL3yIaAAAAAI6VIoSmQeQJGxgyczQXNYbpK276"
}
config.dmsDetails = {
    "url" : "http://15.207.15.185/snapperdms//",
    "username" : "admin",
    "password" : "admin123",
    "grant_type" : "password",
    "mq_url" : "amqp://fjoictoe:gRnUS1aJOEF6PCoIniq6joiYsZ9d9Nak@lionfish.rmq.cloudamqp.com/fjoictoe" + "?heartbeat=60"
}
config.blockchainCred = {
    "username": "naresh.jain@snapperfuturetech.com",
    "passw": "Snapper$0789"
}
config.invoiceAWSBuket = "invoiceimages"
// ============================ End - Shubhangi (SCI-I832) - 07-04-2021 ============================
// ============================ Start - Shubhangi (SCI-I798-New) - 20-02-2021 ============================
config.digilockerDetails = {
    "client_id": "68988B7F",
    "client_secret": "0c36a42d5483a566cd2c",
    "redirect_uri":"http://65.2.26.54:4200/"
}
// ============================ End - Shubhangi (SCI-I798-New) - 06-05-2021 ============================
config.tracechainBlockchainServer={
    userReg:'http://52.140.126.66:4000/users',
    chaincodeUrl:'http://52.140.126.66:4000/channels/mychannel/chaincodes/tracechain'
} 

config.nftServer = {
    API_URL: 'https://eth-ropsten.alchemyapi.io/v2/peMapAz_2Kdf4CseN3LOyGFbYj0C4AXW',
    PRIVATE_KEY : '23bced1d0cdf3463439f062c7b9ee4457c228885d266bcb19cb6a3f7056f1363',
    PUBLIC_KEY : '0x7c187B4EB0Cb81397401dFc952914D2c108099DD',
    PINTA_KEY : "9b1935fd09177aac3ad7",
    PINTA_SECRET : "112707b0cd913fd98307cd2be1eba609c2a6014798886f781379dd68e76ee7e4",
    CONTRACT_ADDRESS : "0xA1B1E14cfc4f3efd101b2d89101007b1703063b9",
}

config.flagBlockchain = {
    blockChainFlag:false
}
module.exports = config;