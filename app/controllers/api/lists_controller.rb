class Api::ListsController < ApplicationController
  def create
    @list = List.new(list_params)
    if @list.save
      render :json => @list
    else
      render :json => @list.errors, :status => :unprocessable_entity
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy!
    render :json => @list
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render :json => @list
    else
      render :json => @list.errors, :status => :unprocessable_entity
    end
  end

  protected
  def list_params
    params.require(:list).permit(:title, :board_id, :ord)
  end
end
