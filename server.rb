require "sinatra"
require "pry"
require "sinatra/reloader" if development?
require "logger"
require "pp"
require 'yaml/store'
enable :logger
enable :logger
enable :sessions
set :session_secret, "super secret"






get "/" do
	erb :gmail
end