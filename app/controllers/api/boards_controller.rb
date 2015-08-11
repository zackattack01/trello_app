class Api::BoardsController < ApplicationController
  def create
    @board = Board.new(board_params)
    @board.user_id = current_user.id
    if @board.save
      render "show"
    else
      render :json => @board.errors, :status => :unprocessable_entity
    end
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy!
    render "show"
  end

  def index
    user_id = current_user.id
    @boards = Board.where(:user_id => user_id)
    render "index"
  end

  def show
    @board = Board.find(params[:id])
    render "show"
  end

  def update
    @board = Board.find(params[:id])
    if @board.update(board_params)
      render "show"
    else
      render :json => @board.errors, :status => :unprocessable_entity
    end
  end

  protected
  def board_params
    params.require(:board).permit(:title)
  end
end
