class Api::ItemsController < ApplicationController
  def create
    @item = Item.new(item_params)
    if @item.save
      render :json => @item
    else
      render :json => @item.errors, :status => :unprocessable_entity
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy!
    render :json => @item
  end

  def index 
    @card = Card.find(params[:card_id])
    @items = @card.items
    render :index
  end

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      render :json => @item
    else
      render :json => @item.errors, :status => :unprocessable_entity
    end
  end

  protected
  def item_params
    params.require(:item).permit(:title, :card_id, :completed)
  end
end