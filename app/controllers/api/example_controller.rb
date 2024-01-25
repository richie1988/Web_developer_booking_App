class Api::ExampleController < ActionController::API
  def index

    @example = []

    render json: @example, status: :ok
  end
end
