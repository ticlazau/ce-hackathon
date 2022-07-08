#
#
# main() will be run when you invoke this action
#
# @param Cloud Functions actions accept a single parameter, which must be a JSON object.
#
# @return The output of this action, which must be a JSON object.
#
#
import sys
import json
from ibm_watson import DiscoveryV2
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

def main(dict):
    authenticator = IAMAuthenticator('xxxxxxxxxxxxxxxxxxxxxxxxx')
    service = DiscoveryV2(version='2020-08-30',authenticator=authenticator)
    service.set_service_url('https://xxxxxxxxxxxxxxxxxxxxxxx')

    response = service.query(
        project_id='xxxxxxxxxxxxxxxxxxxx',
        query='enriched_text.entities.type:symptoms'
        ).get_result()

    return response
