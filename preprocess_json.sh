#!/bin/bash

cat 'public/topical_output.json' | jq -c 'map(del(.page_text_extract_result))' | jq -c "map(del(.last_update_timestamp_obj))" | jq -c "map(del(.page_dates))" | jq -c "map(del(.page_title))" > 'public/topical_output.min.json'
cat 'public/topics.json' | jq -c . > 'public/topics.min.json'