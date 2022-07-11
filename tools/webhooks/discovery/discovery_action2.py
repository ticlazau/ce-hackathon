import sys
import json
from ibm_watson import DiscoveryV2
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
def main(dict):
    authenticator = IAMAuthenticator('xxxxxxxxxxxxxxxxxxxxxxxxx')
    service = DiscoveryV2(version='2020-08-30',authenticator=authenticator)
    service.set_service_url('https://api.eu-de.discovery.watson.cloud.ibm.com/instances/xxxxxxxxxxxxxxxxxxxxxxxx')
    if dict and 'text' in dict:
        response = service.query(
            project_id='xxxxxxxxxxxxxxxxxxxx',
            natural_language_query=dict['text'],
            passages={ "enabled": true, "find_answers":true}
            ).get_result()
        return response
    else 
        return { 'status':'Failed to query Discovery due to missing parameters' }
