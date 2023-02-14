class PropertiesController < ApplicationController

    get '/properties' do
        properties = Property.all
        properties.to_json
    end
end