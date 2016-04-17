Array.prototype.remove = function(object){
  for(var i = 0; i < this.length; i++){
    if(this[i] == object){
      this.splice(i, 1);
      return this;
    }
  }
};

Array.prototype.removeAll = function(what) {
      for(var i = this.length; i--;) {
          if(this[i] === what) {
              this.splice(i, 1);
          }
      }
  return this;
};

Array.prototype.append = function(){
  for(var i = 0; i < arguments.length; i++){
    this.push(arguments[i]);
  }
  return this;
};

Array.prototype.prepend = function(){
  for(var i = 0; i < arguments.length; i++){
    this.unshift(arguments[i]);
  }
  return this;
};

