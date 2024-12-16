const axios = require('axios');

axios.defaults.withCredentials = true;


class Volo{
    constructor(){        
    }
    
    async getListing(){
        var url = 'https://www.volosports.com/graphql'
        var headers = {'content-type': 'application/json', 'Accept-Charset': 'UTF-8'}
        var data = '{"operationName":"discoverDaily","variables":{"input":{"genders":[],"dateLow":null,"timeLow":"0","cityName":"New York Metro Area","venueIds":[],"dateHigh":null,"timeHigh":"1410","daysOfWeek":[],"minimumMen":0,"minimumWomen":0,"minimumNonBinary":0,"sportNames":["Volleyball"],"skillLevels":[],"programTypes":["PICKUP"],"neighborhoodIds":[],"programTagIds":[],"pagination":{"pageNum":1,"numPerPage":50},"premierProgramsOnly":false,"voloPassExclusiveOnly":false}},"query":"query discoverDaily($input: DiscoverInput\u0021) {\\n  discoverDaily(input: $input) {\\n    programs {\\n      leagueId\\n      gameId\\n      startDate\\n      __typename\\n    }\\n    count\\n    endCursor\\n    __typename\\n  }\\n}"}'
        var response = await axios({
            method: 'post',
            url: url,
            data: data,
            headers: headers
        })
        return response.data['data']['discoverDaily']['programs']
    }

    async checkGameRegistration(league_id){
        var url = 'https://www.volosports.com/graphql'
        var payload = '{"operationName":"currentUserIsInProgram","variables":{"input":{"leagueId":"replace_id_here"}},"query":"query currentUserIsInProgram($input: CurrentUserIsInProgramInput\u0021) {\\n  currentUserIsInProgram(input: $input) {\\n    isInProgram\\n    __typename\\n  }\\n}"}'
        //var headers = {'content-type': 'application/json', 'Accept-Charset': 'UTF-8'}
        //var cookies = {'volosports_token':'Bearer%20eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjVlOGM5NTY1N2NkMzk3OWMxZTk2ZjEiLCJpYXQiOjE3MzA3ODUyODAsImV4cCI6MTc2MjMyMTI4MH0.elGW6TIkfMVftty14QEV3DwuTrJwp6BlWC1QBaj6YVhPFDBo0olxTapS6H4ZNsgVn_0y-XMl3v32wwTJWZAlcisxt3CyPDPxyaE7tBwwaooMMYh9EcMK-3hm-vlisPQ_39eYvWySV9SRF9SfSiLdRRizC_mcprYeUFZYBI_EqNjLoe3nM7TPHfH_gd0cx-7vxmGwKalOD3q-4QtHRfxK_WKAjwDJY75J9Vom3mbqPBbheeuVM9_2a-pfKP9Cb0rzoFk13BV4EvC92x5TUGo-uTlCg_i6GaDbOIMarWRzmAT2phSQrWaOmJFZaXNAcuo7eaJLuBwG3nNP9t-felCGfQJxGUW6P81qXBTo6QjUyhdF43cchEriYN_AJu3k1wfRVPMZTwRN2chwC56JpGKokFkqL5HCCTMd0j-t4eDQNz8T1fvDSMYe6lziOTijv7AwX5HFp2gfW2TgrHbBx8HIpnzcSuIeJXy_-FzMy2Amx4zBRFjwdtnTNZm5VJDoFnDTBlWpfC95aR88Lk6xB5AgRn17brCfu4S30YPil8mzdL-nW0CHyqZ7FqP3NpGrwyahIrSDJ7op7KmpE1BbW3ZS2ZrWn0fgLseVw2TLapkyOCd-BR48SizknE4USjW25UFSliq6n630QIAUdlydGNPx-kAn33QxqMzmqlkdYMQ9Y8c'}
        payload = payload.replace("replace_id_here",league_id)
        var cookies = 'volosports_token=Bearer%20eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjVlOGM5NTY1N2NkMzk3OWMxZTk2ZjEiLCJpYXQiOjE3Mjc5NzkzMjAsImV4cCI6MTc1OTUxNTMyMH0.QwxHySJ4fvkg8UkNyd_PQyWKVuufcwkogVYhXoghx5qRR81pCh_Z7YNE_qhiwSCXoloZQnrX_HsCDd8dZTuPQNIj3gou797j6UaSvGS3dZdAmD8TG1Kyj3KZN31i08OBJgBPN3K4N8D2JHa15fT2BqdZhP40qLQTA4zcIZ8zW6NPDWx4iMiexaejvZZLMWVBZkmnPBx2kSixK3YNeorew6YCnvI0XZwwSWc6vSx7-G0O1IfBIucYdoNWtb3PCkwe1d-g7aSGMokIQxP5abaAtq8f2wkIaamQebB9eezd2i8hyDDWy__y-PWkefDJJppndeIe9RTSNSBl--ey-Xu_cTJLCbWiQwgJSL4Jyi9--NtJrZeQNolYDdKtYMTRSsaobr_sbA5Td10KPBj_YI2TuGJ9kaigAeFXQqAHgztP2IhwJw6LdSUK6Ig-6bDLm628JWjPCTdLDZgLwXRNp-RcWLY7uR6qOc5gRYKmf3baaZ_CdsJ2kIQbvnYmhaeUViZbWwc8H-JVYwlJFHH__O1BJXtvmJ1GU5XPHT9bjlJAbOzI7QHa-WACoFiHOPfsWdlwSUVhZi0o4aYThfvOHrSNAj2FrOKDUpIX_lAHZZLsleG3jhGeNzYdU0dy9WWSX3kQ1ARW7mMSIyscMNj9ZgNgNcyAJnKJObuk5zbGF-i_wPE;'
        var headers = {'content-type': 'application/json', 'Accept-Charset': 'UTF-8', 'Cookie':cookies}
        // r = requests.post(url, data=payload, headers=headers,cookies=cookies)
        var response = await axios({
            method: 'post',
            url: url,
            data: payload,
            headers: headers,
        })
        return response.data['data']['currentUserIsInProgram']['isInProgram']
    }
    async checkRoster(league_id){
        var result = []
        var url = 'https://www.volosports.com/graphql'
        var payload = '{"operationName":"programRoster","variables":{"leagueId":"replace_id_here"},"query":"query programRoster($leagueId: ID\u0021) {\\n  programRoster(leagueId: $leagueId) {\\n    userId\\n    gender\\n    picture\\n    userDisplayInfo {\\n      displayName\\n      displayEmail\\n      displayPhone\\n      __typename\\n    }\\n    __typename\\n  }\\n}"}'
        payload = payload.replace("replace_id_here",league_id)
        var cookies = 'volosports_token=Bearer%20eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjVlOGM5NTY1N2NkMzk3OWMxZTk2ZjEiLCJpYXQiOjE3Mjc5NzkzMjAsImV4cCI6MTc1OTUxNTMyMH0.QwxHySJ4fvkg8UkNyd_PQyWKVuufcwkogVYhXoghx5qRR81pCh_Z7YNE_qhiwSCXoloZQnrX_HsCDd8dZTuPQNIj3gou797j6UaSvGS3dZdAmD8TG1Kyj3KZN31i08OBJgBPN3K4N8D2JHa15fT2BqdZhP40qLQTA4zcIZ8zW6NPDWx4iMiexaejvZZLMWVBZkmnPBx2kSixK3YNeorew6YCnvI0XZwwSWc6vSx7-G0O1IfBIucYdoNWtb3PCkwe1d-g7aSGMokIQxP5abaAtq8f2wkIaamQebB9eezd2i8hyDDWy__y-PWkefDJJppndeIe9RTSNSBl--ey-Xu_cTJLCbWiQwgJSL4Jyi9--NtJrZeQNolYDdKtYMTRSsaobr_sbA5Td10KPBj_YI2TuGJ9kaigAeFXQqAHgztP2IhwJw6LdSUK6Ig-6bDLm628JWjPCTdLDZgLwXRNp-RcWLY7uR6qOc5gRYKmf3baaZ_CdsJ2kIQbvnYmhaeUViZbWwc8H-JVYwlJFHH__O1BJXtvmJ1GU5XPHT9bjlJAbOzI7QHa-WACoFiHOPfsWdlwSUVhZi0o4aYThfvOHrSNAj2FrOKDUpIX_lAHZZLsleG3jhGeNzYdU0dy9WWSX3kQ1ARW7mMSIyscMNj9ZgNgNcyAJnKJObuk5zbGF-i_wPE;'
        var headers = {'content-type': 'application/json', 'Accept-Charset': 'UTF-8', 'Cookie':cookies}
                                           	
        var response = await axios({
            method: 'post',
            url: url,
            data: payload,
            headers: headers,
        })
        var roster = response.data['data']['programRoster']
        
        roster.forEach(element => {
            result.push(element.userDisplayInfo.displayName)
        });
        result.sort()
        return result
    }
}

module.exports = Volo